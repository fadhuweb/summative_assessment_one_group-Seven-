Newsletter Subscription Form.

This project is a newsletter subscription form for a fictional blog. The form captures user inputs for subscribing to the blog and includes client-side validation using JavaScript and regular expressions to ensure data integrity and security.



Table of Contents.

Project Overview
Form Requirements
Technologies Used
Setup and Usage
Validation Rules
File Structure
Contributors



Project Overview.

The project involves creating a web page with a form for newsletter subscription. The form captures the user's first name, last name, email, subscription preferences, and password. All inputs are validated using JavaScript before form submission to ensure they meet specified criteria.



Form Requirements.
The form includes the following fields:

First Name: Letters only
Last Name: Letters only
Email: Valid email format
Subscription Preferences: Checkboxes for topics of interest (e.g., Technology, Health, Finance)
Password: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one special character (!@#$%^&*), and one number



Technologies Used.

HTML for structuring the web page
CSS for styling the form and enhancing user experience
JavaScript for client-side validation and sanitization using regular expressions



Setup and Usage.

Clone the repository:
bash
git clone https://github.com/fadhuweb/summative_assessment_one_group-Seven-.git
Navigate to the project directory:
bash
cd summative_assessment_one_group-Seven-.git
Open index.html in your web browser to view and interact with the form.



Validation Rules.

First Name and Last Name: Must contain letters only

Validation Regex: ^[A-Za-z]+$

Email: Must be in a valid email format

Validation Regex: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

Password: 
Minimum 8 characters
At least one uppercase letter
At least one lowercase letter
At least one special character (!@#$%^&*)
At least one number

Validation Regex: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$



File Structure.

newsletter-subscription-form/
│
├── index.html         # The main HTML file containing the form
├── styles.css         # The CSS file for styling the form
└── scripts.js         # The JavaScript file for form validation



Contributors.

Member 1: Theodora Egbunike
Member 2 MichaelMusembi
Member 3 Fadhlullah Abdulazeez
Member 4 Ganza Didier
Member 5 James Jok Dut Akuei
Each team member contributed to various parts of the project, including HTML structure, CSS styling, and JavaScript validation implementation.
