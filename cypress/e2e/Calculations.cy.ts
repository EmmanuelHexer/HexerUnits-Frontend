import EndPoints from "../../src/services/EndPoints";
import GetRandomNumber from "../../src/utility/GetRandomNumber";


describe("Calculations", () => {
    beforeEach(() => cy.visit("/"));

    const convert = (label: string) => {
        const endpoint = EndPoints[label];
        const value: string = GetRandomNumber(0, 1000).toString();
        
        cy.request("POST", `http://localhost:5184/Conversion/${endpoint}/${value}`).then((response) => {
                const expected = response.body.result;

                cy.get("select[data-test-name='select-button']").should("be.visible").and("have.length.greaterThan", 0).select(label);
                cy.get("button[data-test-name='hero-convert-button']").should("be.visible").click();
                cy.get("input[data-test-name='input-value']").should("be.visible").type(value);
                cy.get("button[data-test-name='modal-convert-button']").should("be.visible").click();
                cy.get("input[data-test-name='converted-value']").should("have.value", expected);
            });
    };

    Object.keys(EndPoints).forEach((key: string) => {
        it(`Should convert value correctly for ${key}`, () => {
            convert(key);
        });
    });
});