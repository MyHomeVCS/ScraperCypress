import {Credentials} from "./1_Utils/Credentials.js"
describe("Landing Page", function () 
{

    
    it("Verify UI elements on landing page", function ()
    {         
      cy.visit(Credentials.liveURLlandingPage);
      cy.get('.header__link').should('contain','Pricing').and('contain','Documentation').and('contain','Blog').and('contain','Login')
      cy.get('.header__btn').should('contain','Sign up')
      cy.get('.hero__btn').should('contain', 'Sign Up for Free');
      cy.get('.chess__link').should('contain', 'Get Started');
      cy.get('.btn--primary').should('contain','Get Started');
      cy.get('.btn--secondary').should('contain','Read Docs');
      cy.get('.footer__title').should('contain', 'Pricing').and('contain','Sales Tips & Resources').and('contain','Get to Know us').and('contain','Get Help')      
    })

    it("Verify Links on landing page", function ()
    { 
      //Clicking on Pricing buttond
      cy.visit(Credentials.liveURLlandingPage); 
      cy.get('.header__link').eq(0).click()             
      cy.url().should('include','/pricing/');

      //Clicking on Documentation button
      cy.visit(Credentials.liveURLlandingPage); 
      cy.get('.header__link').eq(1).click()  
      cy.url().should('include','/documentation/');

      //Clicking on Blog button
      cy.visit(Credentials.liveURLlandingPage); 
      cy.get('.header__link').eq(2).click()      
      cy.url().should('include','/blog/');

      //Clicking on Login button
      cy.visit(Credentials.liveURLlandingPage); 
      cy.get('.header__nav--desktop-only >').eq(0).click()      
      cy.url().should('include','/login');

      //Clicking on Sign up button
      cy.visit(Credentials.liveURLlandingPage); 
      cy.get('.header__nav--desktop-only >').eq(1).click()      
      cy.url().should('include','/signup');       
    })


})