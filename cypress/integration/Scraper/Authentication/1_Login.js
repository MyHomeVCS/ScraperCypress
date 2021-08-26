import {Credentials} from "../1_Utils/Credentials.js"

describe("Login page", function () 
{    
    it("Verify UI elements on login page", function ()
    {
      cy.visit(Credentials.devURLloginPage)
      cy.url().should('include','/login')
      cy.get('.modal__title').should('contain','Log In')       
      cy.get('.form-label').should('contain','Email').and('contain','Password')
      cy.get('.btn_').should('contain','Log In')
      cy.get('.text-decoration-none').should('contain','Sign up').and('contain','Forgot Password')
              
    })

    it("Verify login functionality with empty fields", function ()
    { 
      cy.visit(Credentials.devURLloginPage)
      cy.get('.btn_').click()      
      cy.get('.error-text-container').should('contain','E-mail is required').and('contain','Password is required')
      
    })
    
    it("Verify login functionality with invalid email format", function ()
    {       
      cy.visit(Credentials.devURLloginPage)
      cy.get('.modal__form-control').eq(0).type(Credentials.invalidEmail)
      cy.get('.modal__form-control').eq(1).type(Credentials.validPassword)
      cy.get('.btn_').click()
      cy.get('.error-text-container').should('contain','Invalid e-mail address')
    })
    
    it("Verify login functionality with not registered email", function ()
    {       
      cy.visit(Credentials.devURLloginPage)
      cy.get('.modal__form-control').eq(0).type(Credentials.notRegistredEmail)
      cy.get('.modal__form-control').eq(1).type(Credentials.validPassword)
      cy.get('.btn_').click()
      cy.get('.error-text').should('contain','Invalid E-mail/Password')
    })

    it("Verify login functionality with invalid credentials", function ()
    {       
      cy.visit(Credentials.devURLloginPage)
      cy.get('.modal__form-control').eq(0).type(Credentials.validEmail)
      cy.get('.modal__form-control').eq(1).type(Credentials.invalidPassword)
      cy.get('.btn_').click()
      cy.get('.error-text').should('contain','Invalid E-mail/Password')
    })

    it("Verify Login with non-confirmed valid E-mail", function ()
    {       
      cy.visit(Credentials.devURLloginPage)
      cy.get('.modal__form-control').eq(0).type(Credentials.validNotConfirmedEmail)
      cy.get('.modal__form-control').eq(1).type(Credentials.validPassword)
      cy.get('.btn_').click()
      cy.get('.error-text').should('contain','Please go through the activation link sent to this e-mail address to activate your account')
    })

    it("Verify successful login", function ()
    {       
      cy.visit(Credentials.devURLloginPage)
      cy.get('.modal__form-control').eq(0).type(Credentials.validEmail)
      cy.get('.modal__form-control').eq(1).type(Credentials.validPassword)
      cy.get('.btn_').click()
      cy.url().should('include','/dashboard')
      cy.get('.header__btn-circle-icon').click()      
      cy.get('.header__link').should('contain', 'View Profile').and('contain',' Log out ')
      cy.get('.position-absolute > .btn--primary').click()
      cy.url().should('include','/login')      
    })


})