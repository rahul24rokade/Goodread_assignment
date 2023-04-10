const LoginPageLocators = require('../Locators/LoginPageLocators.js');
const Links = require('../Resources/links.js');

//Initialization
let linkobj = new Links();
let loginPageLocator = new LoginPageLocators();
var USERNAME, USERPASSWORD;

export function Login() {
    cy.visit(linkobj.goodReadsUrl, { failOnStatusCode: false });
    USERNAME = linkobj.GOODREADSUSERNM;
    USERPASSWORD = linkobj.GOODREADSPASSWRD;
    cy.get(loginPageLocator.LoginpageSignInButton, { timeout: 5000 }).click()
    cy.xpath(loginPageLocator.SignInWithEmail, { timeout: 20000 }).should('exist').click()
    cy.get(loginPageLocator.EmailTextBox, { timeout: 20000 }).should('exist').type(USERNAME)
    cy.get(loginPageLocator.PasswordtextBox).type(USERPASSWORD)
    cy.get(loginPageLocator.RememberMeCheckbox, { timeout: 5000 }).click()
    cy.get(loginPageLocator.SubmitButton, { timeout: 5000 }).click()
}





