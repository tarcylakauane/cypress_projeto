import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am logged in as {string}', (username) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
});

When('I select sort option {string}', (option) => {
    cy.get('.product_sort_container').select(option);
});

Then('products should be sorted by price ascending', () => {
    cy.get('.inventory_item_price')
        .then($prices => {
            const prices = $prices
                .map((i, el) => parseFloat(el.innerText.replace('$', '')))
                .get();
            const sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices);
        });
});

Then('products should be sorted by name descending', () => {
    cy.get('.inventory_item_name')
        .then($names => {
            const names = $names.map((i, el) => el.innerText).get();
            const sortedNames = [...names].sort().reverse();
            expect(names).to.deep.equal(sortedNames);
        });
}); 