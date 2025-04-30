describe("Modal", () => {
    beforeEach(() => cy.visit("/"));

    it("Validate the existence and visibility of the modal", () => {
        cy.get("button[data-test-name='hero-convert-button']").should("be.visible").click();
        cy.get("form[data-test-name='conversion-modal']").should("exist").and("be.visible");
    });
});