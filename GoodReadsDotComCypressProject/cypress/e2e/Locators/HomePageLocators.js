class HomePageLocators {

    ProfileButton = "//*[@aria-label='Profile Image for Reader.' or contains(@class, 'circularIcon--border')]"
    SignOutListOption = "//li//a[text()='Sign out']"
    SearchBookTextBox = "input[placeholder='Search books']"
    BookList = "//div[text()='xpathtext']"
    WantAsReadButton = "button[aria-label='Tap to shelve book as want to read']"
    HomePageHeader = "//header//a[text()='xpathtext']"
    HomePageTitle = "//a[@title='Goodreads Home']"
    BookAddedToast = "//div[text()='Shelved as want to read']"

}
module.exports = HomePageLocators
