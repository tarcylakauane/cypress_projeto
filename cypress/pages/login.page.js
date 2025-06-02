class LoginPage {
    // Selectors
    get usernameInput() { return '#user-name' }
    get passwordInput() { return '#password' }
    get loginButton() { return '#login-button' }
    get errorMessage() { return '[data-test="error"]' }
    get productsTitle() { return '.title' }

    // Actions
    visit() {
        cy.visit('/')
    }

    login(username, password) {
        cy.get(this.usernameInput).type(username)
        cy.get(this.passwordInput).type(password)
        cy.get(this.loginButton).click()
    }

    getErrorMessage() {
        return cy.get(this.errorMessage)
    }

    getProductsTitle() {
        return cy.get(this.productsTitle)
    }
}

export default new LoginPage() 