describe('Image upload', () => {

    before(() => {
        cy.visit('https://imgur.com/')
    })

    it('Upload new image', () => {
        cy.get('.newPostLabel').should('have.text', 'New post').click()
        cy.url('https://imgur.com/upload').should('contain', '/upload')
        cy.get('.PopUpDrop-DropArea').attachFile('image.jpg')
    })
})