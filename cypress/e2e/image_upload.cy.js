describe('Image upload', () => {

    before(() => {
        cy.visit('https://imgur.com/upload')
    })

    it('Upload new image', () => {
        cy.get('#file-input').attachFile('../fixtures/image.jpg');
        cy.wait(6000);
        cy.get(".ToastContainer").contains("Complete");
    })
})