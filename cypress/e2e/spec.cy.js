describe('Automation Exercise - Signup', () => {
  
  it('should complete the signup form successfully', () => {
    // Visit the website
    cy.visit('https://automationexercise.com');
 
    // Click on Signup/Login
    cy.contains('Signup / Login').click();
 
    // Fill in name and email for signup
    cy.get('input[data-qa="signup-name"]').type('Ram Pranav');
    cy.get('input[data-qa="signup-email"]').type('ftmail@gmail.com');
    cy.get('button[data-qa="signup-button"]').click();
 
    // Wait for the signup form to load
    cy.url().should('include', '/signup');
 
    // Select Title (Radio Button)
    cy.get('#id_gender1').check(); // Mr.
    // cy.get('#id_gender2').check(); // Mrs.
 
    // Fill in password
    cy.get('#password').type('Test@123');
 
    // Select Date of Birth (Dropdowns)
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1995');
 
    // Check Newsletter and Offers
    cy.get('#newsletter').check();
    cy.get('#optin').check();
 
    // Fill in address details
    cy.get('#first_name').type('Test');
    cy.get('#last_name').type('User');
    cy.get('#company').type('TestCorp');
    cy.get('#address1').type('123 Test Street');
    cy.get('#address2').type('Suite 456');
    cy.get('#country').select('India');
    cy.get('#state').type('Tamil Nadu');
    cy.get('#city').type('Chennai');
    cy.get('#zipcode').type('600001');
    cy.get('#mobile_number').type('9876543210');
    cy.con
 
    // Submit the form
    cy.get('button[data-qa="create-account"]').click();
 
    // Verify account creation
    cy.contains('Account Created!').should('be.visible');
    //cy.get("").type().then()
    cy.get('[type="button"]').then(($el)=>{
      const buttonText = $el.text();
      cy.log(buttonText);
    });
    cy.contains('button','Test Cases').click();
  });
});