describe('Orange HRM test', () => {
  const selectorList= {
    usernameFild: "[name='username']",
    passewordFild:"[name='password']",
    loginButton :".oxd-button--medium",
    secttinTitleTopBar :'.oxd-topbar-header-breadcrumb-module', 
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredencialAlert:'.oxd-alert-content-text'
  }

  const userData ={
    userSucess:{
      userName:'Admin',
      userPasseword: 'admin123'
    },

    userFail:{
    userName: 'test',
    userPasseword:'test'
    }
  }


  it('login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucess.userName)
    cy.get(selectorList.passewordFild).type(userData.userSucess.userPasseword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)

    })
  it('login fail', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.userName)
    cy.get(selectorList.passewordFild).type(userData.userFail.userPasseword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)

  })

})