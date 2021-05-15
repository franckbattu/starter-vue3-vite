describe('Home page', () => {
  it('should display main title', () => {
    cy.visit('/');
    cy.contains('h1.title', 'POC Vue 3 with ViteJS');
  })
});