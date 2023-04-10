const HomePageLocators = require('../Locators/HomepageLocators');
const UtilLibrary = require('../Library/Utility.js');

//Initialization
let homePageLocator = new HomePageLocators();
let utillibrary = new UtilLibrary();


export function VerifyLoggedInSuccessful() {
    utillibrary.VerifyElementVisible(homePageLocator.HomePageTitle, 10000)
}

export function VerifyLoggedOutSuccessful() {
    utillibrary.VerifyElementNOTExist(homePageLocator.HomePageTitle, 10000)
}

export function LogOut() {
    cy.xpath(homePageLocator.ProfileButton, { timeout: 10000 }).eq(0).click({ force: true })
    cy.xpath(homePageLocator.SignOutListOption).eq(0).click()
}

export function SearchBook(strBookName) {
    cy.get(homePageLocator.SearchBookTextBox, { timeout: 10000 }).eq(0).type(strBookName)
    let bookName = utillibrary.ElementXpath(homePageLocator.BookList, strBookName)
    cy.xpath(bookName, { timeout: 10000 }).click()
}

export function AddToWantAsRead() {
    cy.get(homePageLocator.WantAsReadButton, { timeout: 10000 }).eq(0).click()
    utillibrary.VerifyElementVisible(homePageLocator.BookAddedToast)
}

export function NavigateToMyBooks(strHeadername) {
    let headerText = utillibrary.ElementXpath(homePageLocator.HomePageHeader, strHeadername)
    cy.xpath(headerText, { timeout: 10000 }).eq(1).click({ force: true })
}

