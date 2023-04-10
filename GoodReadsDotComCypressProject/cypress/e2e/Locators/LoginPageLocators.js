class LoginPageLocators {

    LoginpageSignInButton = "a[href*='/user/sign_in']"
    SignInWithEmail = "//button[contains(text(),'Sign in with email')]"
    EmailTextBox = "input[id='ap_email']"
    PasswordtextBox = "input[id='ap_password']"
    RememberMeCheckbox = "input[name='rememberMe']"
    SubmitButton = "input[id='signInSubmit']"
}
module.exports = LoginPageLocators
