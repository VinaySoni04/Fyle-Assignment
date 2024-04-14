// For enabling tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Main js file
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateTax);
});

function validateInput(input) {
  return input > 0;
}

function calculateTax() {
  const grossIncome = document.getElementById("grossIncome").value;
  const extraIncome = document.getElementById("extraIncome").value;
  const deductions = document.getElementById("deductions").value;
  const ageGroup = document.getElementById("age").value;

  document.querySelectorAll(".error-icon").forEach((icon) => {
    icon.style.display = "none";
  });

  let isValid = true; // Checking all provided details are valid or not.
  if (!validateInput(grossIncome)) {
    document.querySelector("#grossIncome + .error-icon").style.display =
      "inline";
    isValid = false;
  }

  if (!validateInput(extraIncome)) {
    document.querySelector("#extraIncome + .error-icon").style.display =
      "inline";
    isValid = false;
  }

  if (!validateInput(deductions)) {
    document.querySelector("#deductions + .error-icon").style.display =
      "inline";
    isValid = false;
  }

  if (ageGroup === "") {
    document.querySelector("#age + .error-icon").style.display = "inline";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // Main logic

  const totalIncome =
    parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);
  let taxRate = 0;

  if (totalIncome > 800000) {
    switch (ageGroup) {
      case "<40":
        taxRate = 0.3;
        break;
      case "40-59":
        taxRate = 0.4;
        break;
      case ">=60":
        taxRate = 0.1;
        break;
    }

    const tax = (totalIncome - 800000) * taxRate;
    const finalIncome = totalIncome - tax;
    showModal(`${finalIncome.toLocaleString()}`, true);
  } else {
    showModal("No tax applicable.", false);
  }
}

function showModal(message, isDigit) {
  const modal = document.getElementById("resultModal");
  if (!isDigit) {
    document.getElementById("resultText").innerText = message;
    document.getElementById("h3").innerText = "";
    document.getElementById("p").innerText = "";
  } else {
    document.getElementById("resultText").innerText = message;
    document.getElementById("h3").innerText = "Your overall income will be";
    document.getElementById("p").innerText = "after tax deductions";
  }

  modal.style.display = "flex";

  document.querySelector(".close").onclick = function () {
    modal.style.display = "none";
    // Setting all value as blank, for next use
    document.getElementById("grossIncome").value = "";
    document.getElementById("extraIncome").value = "";
    document.getElementById("deductions").value = "";
    document.getElementById("age").value = "";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
