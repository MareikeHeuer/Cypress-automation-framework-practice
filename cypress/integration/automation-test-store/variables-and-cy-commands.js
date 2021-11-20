describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='=product/category&path']").contains("Makeup").click();
    cy.get("a[href*='=product/category&path']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='=product/category&path']").contains("Makeup").click();

    // Following code will fail
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + "headerText");
      expect(headerText).is.eq("Makeup");
    });
  });
});
