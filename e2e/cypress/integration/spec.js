/// <reference types="Cypress"/>

it('displays hello world', () => {
    cy.visit('/');
    cy.get('.site-heading')
        .should('contain', 'Sarah\'s Classroom');
});