/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("John");
    cy.get("#ContactUsFrm_email").type("john@hotmail.com");
    cy.get("#ContactUsFrm_enquiry").type("This is my comment");
    cy.get(".col-md-6 > .btn").click();
  });
});
