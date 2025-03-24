import userData from '../fixtures/users/userData.json'
import LoginPage from '../../pages/loginPages'
import DashboardPages from '../../pages/dashboarPages'
import MenuPages from '../../pages/menuPages'
import MyInfoPage from '../../pages/myInfoPage'

const Chance = require('chance');
//para o funcionamento do importe precisa ser criado uma const para ser chamado no código
const chance = new Chance();
const loginPage = new LoginPage()
const dashboardGrid = new DashboardPages()
const menuPages = new MenuPages()
const myInfoPage = new MyInfoPage()

describe('Orange HRM test', () => {
  
  it('User Info Updata sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.passeword )
    dashboardGrid.checkDashboardPage()
    menuPages.acessMyInfo()

    myInfoPage.fillPersonalDetails(chance.name(), chance.last(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployID', 'OtherID', 'LicenseDate00', '2025-12-31', '1990-10-20')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  
    })
  

})