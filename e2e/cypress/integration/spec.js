/// <reference types="Cypress"/>

it('displays site heading', () => {
    cy.visit('/');
    cy.get('.site-heading')
        .should('contain', 'Sarah\'s Classroom');
});