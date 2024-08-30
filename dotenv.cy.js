require('dotenv').config()  

const email = process.env.email || "mdsahinalam230@gmail.com";
const pass = process.env.pass || "Sahin@1234";

describe('LinkedIn Profile', () => {
    it('name', () => {
        cy.visit('https://www.linkedin.com/login')
        cy.get('[name="session_key"]').type(email)
        cy.get('[name="session_password"]').type(pass)
        cy.get('.btn__primary--large').click()
        cy.wait(5000)
   
        //cy.get('div[class="t-16 t-black t-bold"]').should('contain', 'Welcome, SAHIN!')
        cy.contains('Hellion')
    })
})