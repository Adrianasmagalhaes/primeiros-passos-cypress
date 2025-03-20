class MenuPages{
    selectorList(){
        const selectors={
            myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
            recruitmentButton :"[href='/web/index.php/recruitment/viewRecruitmentModule']",
    }
    return selectors
}
    acessMyInfo(){
        cy.get(this.selectorList().myInfoButton).click()
    }
    
    acessRecruitment(){
        cy.get(this.selectorList().recruitmentButton).click()
    }
}

export default MenuPages