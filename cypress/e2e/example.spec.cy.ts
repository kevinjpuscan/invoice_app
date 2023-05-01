describe("Example spec", () => {
  it("example", () => {
    cy._goToPage("/");
    cy._getByDataTest("example").should("be.visible");
  });
});
