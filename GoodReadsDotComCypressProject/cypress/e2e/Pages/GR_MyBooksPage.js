const MyBooksPageLocators = require('../Locators/MyBooksPageLocators');
const UtilLibrary = require('../Library/Utility.js');

//Initialization
let myBooksPageLocator = new MyBooksPageLocators();
let utillibrary = new UtilLibrary();

export function RemoveBookCrossButton() {
    cy.get(myBooksPageLocator.RemoveBookCrossButton).click()
}

export function VerifyBookRemoved() {
    utillibrary.VerifyElementExist(myBooksPageLocator.NoContent, 10000)
}