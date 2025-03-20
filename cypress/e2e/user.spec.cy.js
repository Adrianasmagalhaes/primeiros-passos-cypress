import userData from '../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPages'
import DashboardPages from '../../pages/dashboarPages'
import MenuPages from '../../pages/menuPages'

//para o funcionamento do importe precisa ser criado uma const para ser chamado no código

const loginPage = new LoginPage()
const dashboardGrid = new DashboardPages()
const menuPages = new MenuPages()

describe('Orange HRM test', () => {
  const selectorList= {
   
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField:"[name='lastName']",
    gerenicFiel: ".oxd-input--active",
    dataField :"[placeholder='yyyy-dd-mm']",
    dataCloseButton:".--close",
    submitButton:"[type='submit']",
    selectFild: ".oxd-select-wrapper",
    genericCombobox:".oxd-select-text--arrow",
    genericComboboxStatus:".oxd-select-dropdown > :nth-child(4)",
    radioInput:".oxd-radio-input--active"
  }



  it.only('User Info Updata sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passeword )
    dashboardGrid.checkDashboardPage()
    menuPages.acessMyInfo()
    
    // cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Master Test') 
    cy.get(selectorList.middleNameField).clear().type('Middle Test')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.gerenicFiel).eq(4).clear().type(12345)
    cy.get(selectorList.gerenicFiel).eq(5).clear().type(6789)
    cy.get(selectorList.gerenicFiel).eq(6).clear().type(1011)
    cy.get(selectorList.dataField).eq(0).clear().type('2030-05-05')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.dataField).eq(0).clear().type('1992-12-25')
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(':nth-child(27) > span').click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get(selectorList.genericComboboxStatus).click()
    cy.get(selectorList.radioInput).eq(0).click()
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