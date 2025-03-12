import userData from '../fixtures/users/userData.json'

describe('Orange HRM test', () => {
  const selectorList= {
    usernameFild: "[name='username']",
    passewordFild:"[name='password']",
    loginButton :".oxd-button--medium",
    secttinTitleTopBar :'.oxd-topbar-header-breadcrumb-module', 
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredencialAlert:'.oxd-alert-content-text'
  }

  // const userData ={
  //   userSucess:{
  //     username:'Admin',
  //     passeword: 'admin123'
  //   },

  //   userFail:{
  //   username: 'test',
  //   passeword:'test'
  //   }
  // }


  it('login sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucess.username)
    cy.get(selectorList.passewordFild).type(userData.userSucess.passeword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/auth/login')
    

    })
  it('login fail', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.username)
    cy.get(selectorList.passewordFild).type(userData.userFail.passeword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
   
  })

})