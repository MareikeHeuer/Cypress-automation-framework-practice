/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#contact-us').click({force: true})
    cy.document().should("have.property", "charset").and("eq", "UTF-8"); // Chai Assertion
    cy.title().should("include", "WebDriver | Contact Us"); // title assertion
    cy.url().should("include", "contactus"); // url assertion
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Miller");
    cy.get('[name="email"]').type("joe@hotmail.com");
    cy.get("textarea.feedback-input").type("Here is the comment");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!"); // Cypress Assertion
  });

  it("Should not be able to submit a successful submission via contact us form as all fields required", () => {
    // cypress code
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("Jones");
    // cy.get('[name="email"]').type("joe@hotmail.com")
    cy.get("textarea.feedback-input").type("This should not work");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
