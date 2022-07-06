/// <reference types="Cypress" />

describe("Checkout product items", () => {
    it("Test checkout page", () => {
  
      //visit saucedemo website
      cy.visit("https://www.saucedemo.com/")
  
      //login
      cy.get("[data-test=username]").type("standard_user")
      cy.get("[data-test=password]").type("secret_sauce")
      cy.get("[data-test=login-button]").click()
      cy.log("Successfully Login")
  
      // Add 2  items to cart 
      cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click({ force: true })
      cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click({ force: true })
  
      //click cart
      cy.get('.shopping_cart_link').click({ force: true })
      cy.url().should("include", "/cart") //validate cart page url

      cy.wait(2000)

      //click checkout
      cy.get('[data-test=checkout]').click({ force: true })
      cy.url().should("include", "/checkout-step-one") //validate checkout page url  


      //Fill up checkout information correctly
      cy.get('[data-test=firstName]').type("John")
      cy.get('[data-test=lastName]').type("Doe")
      cy.get('[data-test=postalCode]').type("1234")

      //Click Checkout Button to continue
      cy.get('[data-test=continue]').click({ force: true })

      //Finish Buttob checkout
      cy.get('[data-test=finish]').click({ force: true })

      cy.get('.complete-header').should("have.text", "THANK YOU FOR YOUR ORDER")
      cy.log("Checkout succesfully")


  
    })
  
  
  })
  