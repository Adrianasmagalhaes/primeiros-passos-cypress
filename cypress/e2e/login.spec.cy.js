describe('Orange HRM test', () => {
  it('login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get(".oxd-button--medium").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')

    })
  it('login fail', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test')
    cy.get(".oxd-button--medium").click()
    cy.get('.oxd-alert-content > .oxd-text')

  })

})