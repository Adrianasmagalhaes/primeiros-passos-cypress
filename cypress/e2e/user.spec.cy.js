import userData from '../fixtures/users/userData.json'

describe('Orange HRM test', () => {
  const selectorList= {
    usernameFild: "[name='username']",
    passewordFild:"[name='password']",
    loginButton :".oxd-button--medium",
    secttinTitleTopBar :'.oxd-topbar-header-breadcrumb-module', 
    dashboardGrid:'.orangehrm-dashboard-grid',
    wrongCredencialAlert:'.oxd-alert-content-text',
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    gerenicFiel: ".oxd-input--active",
    dataField :"[placeholder='yyyy-dd-mm']",
    dataCloseButton:".--close",
    submitButton:"[type='submit']"
    
  }



  it.only('User Info Updata sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucess.username)
    cy.get(selectorList.passewordFild).type(userData.userSucess.passeword)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Master Test') 
    cy.get(selectorList.middleNameField).clear().type('Middle Test')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.gerenicFiel).eq(4).clear().type(12345)
    cy.get(selectorList.gerenicFiel).eq(5).clear().type(6789)
    cy.get(selectorList.dataField).eq(0).clear().type('2025-12-25')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast')
    
    })
  it('login fail', ()=>{
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.username)
    cy.get(selectorList.passewordFild).type(userData.userFail.passeword)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  
  })

})