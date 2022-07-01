/// <reference types="Cypress" />

//import { constants } from "../../../support/constants" //not working

describe("Test Login Form via saucedemo", () => {
  it("Login correct email and password", () => {
    //visit saucedemo website
    cy.visit("https://www.saucedemo.com/")

    cy.get("[data-test=username]").type("standard_user")
    .should('have.value', 'standard_user') //validate username input value
    .should("have.attr", "name", "user-name") //validate username attribute

    cy.get("[data-test=password]").type("secret_sauce")
    cy.get("[data-test=password]").should("have.attr", "name", "password") //validate password input

    cy.get("[data-test=login-button]").click()

    cy.url().should("include", "/inventory") //validate page url
    cy.log("Successfully Login")
  })

})
