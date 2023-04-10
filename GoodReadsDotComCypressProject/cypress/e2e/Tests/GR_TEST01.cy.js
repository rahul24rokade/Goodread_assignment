import * as Login from "../Pages/GR_LoginPage.js"
import * as HomePage from "../Pages/GR_HomePage.js"
import * as MyBooksPage from "../Pages/GR_MyBooksPage.js"
require('cypress-xpath');

var TestDatapath = "TestData/GR_TEST01.json"
let TestData

describe('goodreads.com Automation', () => {
  before(function () {
    //access fixture data
    cy.fixture(TestDatapath).then((json) => {
      TestData = json;
    })
  })

  beforeEach(() => {
    Login.Login()
    HomePage.VerifyLoggedInSuccessful()
  })

  afterEach(() => {
    HomePage.LogOut()
    HomePage.VerifyLoggedOutSuccessful()
  })

  it('Search for a specific book title and mark it as want to read', () => {
    HomePage.SearchBook(TestData.bookName)
    HomePage.AddToWantAsRead()
  })

  it('Remove selected boook from my book list', () => {
    HomePage.NavigateToMyBooks(TestData.myBooksHeader)
    MyBooksPage.RemoveBookCrossButton()
    MyBooksPage.VerifyBookRemoved()

  })
})
