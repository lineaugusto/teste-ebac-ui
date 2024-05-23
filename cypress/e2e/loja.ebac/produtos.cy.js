/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produto', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
     
    });


    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Circe Hooded Ice Fleece'
        produtosPage.buscarProduto (produto)
        cy.get('.product_title').should('contain', produto)
    });


    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain','Aether Gym Pant' )
    });


    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('36', 'Brown', qtd) 
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
    });
   
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
             produtosPage.buscarProduto(dados[2].nomeProduto)
             produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade) 
             cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
            })      
     });


});