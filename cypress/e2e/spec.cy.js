describe("Demo spec", () => {
  beforeEach(() => {
    // Open Eyes to start visual testing.
    // Each test should open its own Eyes for its own snapshots.
    cy.eyesOpen({
      // The name of the application under test.
      // All tests for the same app should share the same app name.
      // Set this name wisely: Applitools features rely on a shared app name across tests.
      appName: "Practise Demo blaze App",

      // The name of the test case for the given application.
      // Additional unique characteristics of the test may also be specified as part of the test name,
      // such as localization information ("Home Page - EN") or different user permissions ("Login by admin").
      testName: Cypress.currentTest.title,
    });
  });

  it("Demo Blaze Login", () => {
    cy.visit("https://www.incubyte.co/why-incubyte");
    cy.wait(5000);
    cy.eyesCheckWindow({
      tag: "Why page",
      target: "window",
      fully: true,
    });
    cy.get("a").contains('Careers').click();
    cy.wait(5000);
    cy.eyesCheckWindow({
      tag: "Career page",
      target: "window",
      fully: true,
    });

  });

  afterEach(() => {
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose();
  });
});
