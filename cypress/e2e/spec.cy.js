describe("check-password", () => {
  it("should test if password is ok", () => {
    cy.visit("http://localhost:5173");

    cy.get("#input").type("Ae123!");
    cy.get("#btn").click();
    cy.get("#error-msg").contains("Le mot de passe doit comporter au moins 8 caractères");

    cy.get("#input").clear().type("Aeijiji!");
    cy.get("#btn").click();
    cy.get("#error-msg").contains("Le mot de passe doit contenir au moins 1 chiffre");

    cy.get("#input").clear().type("Aeijiji2");
    cy.get("#btn").click();
    cy.get("#error-msg").contains("Le mot de passe doit contenir au moins un caractère spécial");

    cy.get("#input").clear().type("Aeiji232é!");
    cy.get("#btn").click();
    cy.get("#error-msg").contains("Le mot de passe est ok");
  });
});