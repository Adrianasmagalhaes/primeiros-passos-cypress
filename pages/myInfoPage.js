class MyInfoPage{

    selectorList(){
       const selectors={
            firstNameField:"[name='firstName']",
            middleNameField:"[name='middleName']",
            lastNameField:"[name='lastName']",
            gerenicFiel: ".oxd-input--active",
            
            dataField :"[placeholder='yyyy-dd-mm']",
            dataCloseButton:".--close" ,
            submitButton:"[type='submit']",
            selectFild: ".oxd-select-wrapper",
            genericCombobox:".oxd-select-text--arrow",
            genericComboboxStatus:".oxd-select-dropdown > :nth-child(4)",
            radioInput:".oxd-radio-input--active"
        }
        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherId,driveLicenseDate, expiryDate, dateOfBirth){
        cy.get(this.selectorList().gerenicFiel).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().gerenicFiel).eq(5).clear().type(otherId)
        cy.get(this.selectorList().gerenicFiel).eq(6).clear().type(driveLicenseDate)
       
        cy.get(this.selectorList().dataField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorList().dataCloseButton).click({force:true})
        cy.get(this.selectorList().dataField).eq(1).clear().type(dateOfBirth)
        }

    fillStatus(){
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(':nth-child(27) > span').click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().genericComboboxStatus).click()
        cy.get(this.selectorList().radioInput).eq(0).click()
    }
    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain','Successfully Update')
        cy.get('.oxd-toast')
    }
}

export default MyInfoPage