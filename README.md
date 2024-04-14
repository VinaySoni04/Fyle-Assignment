# Overview
The Tax Calculator application is a web-based tool designed to assist users in calculating their income tax liability based on various inputs such as gross annual income, extra income, deductions, and age group. The application follows specific tax rules and formulas to determine the tax amount owed by the user.

# Key Features:

1. Input Fields:-

   a. Gross Annual Income: Users enter their total annual income before any deductions.

   b. Extra Income: Additional income earned from sources other than the primary job.

   c. Deductions: Allowable deductions that reduce taxable income.

   d. Age Group: Selection of age category (<40, 40-59, ≥60) for applying specific tax rates.


2. Error Handling:-

   a. Validation of input fields to ensure users enter valid numeric values.
   b. Display of error icons and tooltips to guide users on correct input requirements.

3. Tax Calculation:-
   
   a. Application of tax rules based on the user's total income and age group:
   b. No tax if income is below a certain threshold.
   c. Progressive tax rates applied for income above the threshold, depending on the age group (<40, 40-59, ≥60).

4. Modal Display:

   a. Presentation of the calculated tax amount in a modal window after submission.

# Technical Implementation:

# Front-end Technologies:
1. HTML, CSS, and JavaScript for user interface and interactivity.
2. Bootstrap framework for responsive design and components.
3. Tooltips and error handling using Bootstrap's tooltip component.

# JavaScript Functionality:
1. Event listeners to handle form submission and validation.
2. Calculation logic to determine tax amount based on user inputs.

# User Flow:
1. Users input their gross annual income, extra income, deductions, and select their age group.
2. The application validates the input fields and displays error messages if necessary.
3. Upon submission, the application calculates the tax amount based on predefined tax rules.
4. The calculated tax amount is presented to the user in a modal popup.

# Purpose and Benefits:
1. Provides users with a quick and convenient way to estimate their tax liability.
2. Helps users understand how deductions and age impact their taxable income and tax rate.
3. Promotes financial awareness and transparency regarding tax obligations.

# Future Enhancements:
1. Integration with backend services for storing user data securely.
2. Support for additional tax scenarios and customizable tax rules.
3. Enhancements to the user interface for improved usability and accessibility.

# Prerequisites:
1. Text Editor: Install a text editor like Visual Studio Code for editing code.
2. Web Browser: Use a modern web browser such as Google Chrome.
3. Local Server: You can use a local development server like Node.js with http-server to serve your web application.

# Steps to set up and run this application on your local machine
1. Clone the GitHub Repository:-
Open a terminal in your editor and use the following command to clone the repository to your local machine.

   git clone <repository_url>

   Replace <repository_url> with the URL of your GitHub repository.
2. Navigate to the Project Directory:
Change into the project directory after cloning:

   cd <repository_name>

   Replace <repository_name> with the name of the cloned repository directory.
3. Install Dependencies (if needed):-
If your project relies on external libraries or dependencies managed via npm (Node Package Manager) or other package managers, install them using:

   npm install

   This command will install all the necessary dependencies specified in the package.json file.
4. Start a Local Server:-
Use a local development server to run your application. You can use tools Node.js with http-server package or VSCode plugin, or any other preferred server setup.
   1. For Node.js
   
      npm install -g http-server
 
      http-server
   
      This will start a local server on port 8000 by default.

   2. For VSCode plugin

      Install "Live server" from extensions tab and navigate to .html file. After simple click on "Go live" button on the bottom-right corner. 

# User-Interface of Application

<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/6133207c-44f0-496d-8caf-ca08f1cb547e" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/d2786cc0-06cd-432c-9a3d-c59a1d9e521c" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/331683ea-a6b5-4504-819a-538644cd8e01" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/03679b99-3728-4240-bdf9-63baae908b0e" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/95190924-31fa-44db-b478-8575d7b298c0" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/daf5614e-1d4c-4dea-8db2-9f6c9e11d006" width="450" height="300">

# Testing Instructions
1. Input Validation
   1. Test Numeric Inputs:-
      a. Enter valid numeric values in the "Gross Annual Income," "Extra Income," and "Deductions" fields.
      b. Verify that error messages or tooltips do not appear for valid inputs.
      
   2. Test Invalid Inputs:-
      a. Enter non-numeric characters (e.g., letters, symbols) in the numeric input fields.
      b. Verify that appropriate error messages or tooltips appear for invalid inputs.
      
2. Age Group Selection
   1. Select Age Group:
      a. Choose different age groups (<40, 40-59, ≥60) from the dropdown menu.
      b. Verify that the selected age group affects the tax calculation.
      
3. Tax Calculation
   1. Calculate Tax:
     a. Input various combinations of gross income, extra income, deductions, and age group.
     b. Verify that the calculated tax amount is accurate based on the specified tax rules.

# Example

1. Gross income = -1000000(Negative number), Extra income = xyz, Age group = (>40), Deduction = 10000
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/1d784681-ee55-44b9-8b28-157798151be3" width="450" height="300">
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/4b651c6c-2eb7-4d2d-aa99-ab953fd506f5" width="450" height="300">


2. Gross income = 1000000, Extra income = 10000, Age group = (>40), Deduction = 10000
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/a8578489-6608-48bd-9e6a-ff3164e53f83" width="500" height="300">

3. Gross income = 600000, Extra income = 10000, Age group = (>40), Deduction = 10000
<img src="https://github.com/VinaySoni04/Fyle-Assignment/assets/98009479/3d4d1892-a590-49e5-8098-4909f9a293b1" width="500" height="300">

