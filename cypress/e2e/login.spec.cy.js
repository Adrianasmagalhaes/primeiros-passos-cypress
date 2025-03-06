describe('Orange HRM test', () => {
  const selectorList= {
    usernameFild: "[name='username']",
    passewordFild:"[name='password']",
    loginButton :".oxd-button--medium",
    secttinTitleTopBar :'.oxd-topbar-header-breadcrumb-module',
    wrongCredencialAlert:'.oxd-alert-content-text'
  }
  it('login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type('Admin')
    cy.get(selectorList.passewordFild).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.secttinTitleTopBar).contains('Dashboard')

    })
  it('login fail', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test')
    cy.get(".oxd-button--medium").click()
    cy.get(selectorList.wrongCredencialAlert)

  })

})