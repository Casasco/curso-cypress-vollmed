describe('Testes em API', () => {
    context('Testes em rotas com usuário autorizado', () => {
        beforeEach(() => {
            cy.loginApi(Cypress.env('email'), Cypress.env('password'))

        })
        it('GET via url front para teste em reposta da home', () => {
            cy.request('GET', '/').should((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Verifica se o token de autenticação é retornado após login via POST na API',() => {
            cy.get('@token').should('exist')
        })
    })
})