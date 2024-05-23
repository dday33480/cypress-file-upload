describe('Navigation tests', () => {

    beforeEach(() => {
        cy.visit('https://imgur.com')
    })

    it('Navigation to New upload', () => {
        cy.get('[href="/upload"]').should('have.text', 'New post');
        cy.get('[href="/upload"]').click();
        cy.url('https://imgur.com/upload').should('contain', '/upload');
        cy.get('.UploadDialog').should('be.visible')
    })

    it('Navigartion back to home page', () => {
        cy.get('[href="/upload"]').click();
        cy.get('.PopUpClose').click();
        cy.get('svg').click();
        cy.url('https://imgur.com');
    })

})