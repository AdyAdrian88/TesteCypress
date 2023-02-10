describe('On Linkedin', () => {

    it('I can login', () => {
    cy.visit('https://linkedin.com');
    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('iozu_adrian@yahoo.com');
    cy.get('#password').type('pesmaster88');
    cy.get('.btn__primary--large').click();
    cy.get('#ember16').should('exist');

    })
})