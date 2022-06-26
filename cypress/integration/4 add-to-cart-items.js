/// <reference types="Cypress" />

describe("Test product items", () => {
  it("Login correct email and password", () => {

    //visit saucedemo website
    cy.visit("https://www.saucedemo.com/")

    //login
    cy.get("[data-test=username]").type("standard_user")
    cy.get("[data-test=password]").type("secret_sauce")
    cy.get("[data-test=login-button]").click()
    cy.log("Successfully Login")

    cy.get('#item_4_title_link > .inventory_item_name').click({ force: true })
    cy.url().should("include", "inventory-item.html?id=4") //validate page url

    cy.wait(2000)

    //click Add to cart
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click({ force: true })

    cy.get('[data-test=remove-sauce-labs-backpack]').should("have.text", "Remove")//validate if the add to cart was clicked
    cy.get('.shopping_cart_badge').should("contain", "1")//validate if there's any number added to the cart
    cy.log("Add to cart succesfully")

    //remove from cart
    cy.get('[data-test=remove-sauce-labs-backpack]').click({ force: true })
    cy.log("remove from cart succesfully")


    //back to list of products
    cy.get('[data-test=back-to-products]').click({ force: true })

    // Add 2  items to cart 
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click({ force: true })
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click({ force: true })

    cy.get('.shopping_cart_badge').should("contain", "2")//validate if there's any number added to the cart
    cy.log("Add multiple items to cart succesfully")

  })


})
