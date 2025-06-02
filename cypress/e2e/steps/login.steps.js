import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the login page', () => {
    cy.visit('https://www.saucedemo.com/');
});

When('I enter valid username {string}', (username) => {
    cy.get('[data-test="username"]').type(username);
});

When('I enter valid password {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
});

When('I enter invalid username {string}', (username) => {
    cy.get('[data-test="username"]').type(username);
});

When('I enter invalid password {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
});

When('I click the login button', () => {
    cy.get('[data-test="login-button"]').click();
});

When('I click the login button without entering credentials', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('I should be redirected to the inventory page', () => {
    cy.url().should('include', '/inventory.html');
});

Then('I should see the products title', () => {
    cy.get('.title').should('have.text', 'Products');
});

Then('I should see an error message', () => {
    cy.get('[data-test="error"]').should('be.visible');
});

Then('I should see an error message containing {string}', (message) => {
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', message);
});

Then('I should see an error message about required fields', () => {
    cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain', 'Epic sadface: Username is required');
});

Then('I should remain on the login page', () => {
    cy.url().should('include', 'https://www.saucedemo.com/');
});

// Novos steps para o cenário "Login with problem user"
Then('I should see broken product images', () => {
    // Verifica se pelo menos uma imagem está quebrada (característica do problem_user)
    cy.get('.inventory_item img')
        .first()
        .should('have.attr', 'src')
        .and('include', '/static/media/sl-404');
    
    // Verifica se todas as imagens estão visíveis
    cy.get('.inventory_item img')
        .should('be.visible')
        .should('have.length.at.least', 1);
}); 