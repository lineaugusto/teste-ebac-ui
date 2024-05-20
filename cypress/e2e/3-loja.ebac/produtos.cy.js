/// <reference types="cypress"/>

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
     cy.get('.products > .row')   
        //.first()
        //.last() 
        //.eq()
        .contains('Argus All-Weather Tank') 
        .click() 

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        

        
    });
});