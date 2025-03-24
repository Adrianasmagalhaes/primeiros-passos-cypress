import userData from '../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPages'
import DashboardPages from '../../pages/dashboarPages'


//para o funcionamento do importe precisa ser criado uma const para ser chamado no código


const loginPage = new LoginPage()
const dashboardGrid = new DashboardPages()

describe('Login Orange HRM test', () => {
  

  it('login - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passeword )
    dashboardGrid.checkDashboardPage()
    
    })


  it('login - fail', ()=>{
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.passeword)
    loginPage.checkAccessInvalid()



    
  
  })

})