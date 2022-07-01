/// <reference types="Cypress" />

describe("Test Login Form via saucedemo", () => {
  it("Login incorrect username", () => {
    //visit saucedemo website
    cy.visit("https://www.saucedemo.com/")

    cy.get("[data-test=username]")
      .type("standard_user2")
      .should("have.attr", "name", "user-name") //validate username input

    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.attr", "name", "password") //validate password input

    cy.get("[data-test=login-button]").click()

    cy.get("[data-test=error]").should("include.text", "Epic sadface") //validate error message

    cy.get("[data-test=error]")
      .contains("Epic sadface")
      .then((errorText) => {
        cy.log("Login failed: " + errorText.text())
      })
  })
})
