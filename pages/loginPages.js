class LoginPage {
    selectorList(){
        const selectors={
        usernameFild: "[name='username']",
        passewordFild:"[name='password']",
        loginButton :".oxd-button--medium",
        wrongCredencialAlert:'.oxd-alert-content-text',
        }
        return selectors
    } 
    acessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, passeword){
        cy.get(this.selectorList().usernameFild).type(username)
        cy.get(this.selectorList().passewordFild).type(passeword)
        cy.get(this.selectorList().loginButton).click()

        }

        checkAccessInvalid(){
            cy.get(this.selectorList().wrongCredencialAlert)
        }
}

export default LoginPage