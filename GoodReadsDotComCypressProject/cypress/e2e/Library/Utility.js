const path = require('path');


class Utility {

    //Element Dynamic Xpath 
    ElementXpath(elementxpath, dynamictext) {
        dynamictext = dynamictext.replace("'", "\'");
        elementxpath = elementxpath.replace("xpathtext", dynamictext);
        return elementxpath;
    }

    //Code to check if Element is visible by Xpath 
    VerifyElementVisible(ElementXpath, timeDurationMilliSeconds) {
        cy.xpath(ElementXpath, { timeout: timeDurationMilliSeconds }).should('be.visible');
    }

    //Code to check if Element not Exist  by Xpath 
    VerifyElementNOTExist(ElementXpath, timeDurationMilliSeconds) {
        cy.xpath(ElementXpath, { timeout: timeDurationMilliSeconds }).should('not.exist');
    }

    //Code to check if Element is Exist by Xpath 
    VerifyElementExist(ElementXpath, timeDurationMilliSeconds) {
        cy.xpath(ElementXpath, { timeout: timeDurationMilliSeconds }).should('exist');
    }
}
module.exports = Utility
