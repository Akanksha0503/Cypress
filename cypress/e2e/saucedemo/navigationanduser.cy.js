describe('Practice ExpandTesting - Full Cypress Interaction', () => {
  it('should perform all key Cypress actions with logging', () => {
    // Navigation and viewport setup
    cy.visit('https://practice.expandtesting.com/login');
    cy.task('log','Visited Login Page');

    cy.viewport(1280, 720); // Desktop resolution
    cy.task('log','Viewport set to 1280x720');

    // Querying and typing into login form
    cy.get('#username').clear().type('practiceUser');
    cy.task('log','Typed username');

    cy.get('#password').clear().type('practicePass');
    cy.task('log','Typed password');

    // Click login button using .contains()
    cy.contains('Login').click();
    cy.task('log','Clicked Login button using .contains()');

    // Navigate to Dropdown List page
    cy.visit('https://practice.expandtesting.com/dropdown');
    cy.task('log','Navigated to Dropdown List page');

    // Use .select() on dropdown
    cy.get('#dropdown').select('Option 2');
    cy.task('log','Selected Option 2 from dropdown');

    // Use .find(), .first(), .last() on list items
    cy.get('ul').find('li').first().then($el => {
      cy.task('log', 'Found first item');
    });

    cy.get('ul').find('li').last().then($el => {
      cy.task('log', 'Found last item');
    });

    // Trigger mouseover event on dropdown
    cy.get('#dropdown').trigger('mouseover');
    cy.task('log','Mouseover triggered on dropdown');

    // Reload the page
    cy.reload();
    console.log('Reloaded Dropdown List page');

    // Navigation history
    cy.go('back');
    cy.task('log','Navigated back to Login page');

    cy.go('forward');
    cy.task('log','Navigated forward to Dropdown List page');

    // Illustrative checkbox interaction (if present)

    cy.visit('https://practice.expandtesting.com/checkboxes');
    cy.task('log','Navigated to Checkboxes page');

    cy.visit('https://practice.expandtesting.com/checkboxes');

    cy.get('input[type="checkbox"]').first().check({ force: true });
    cy.task('log','Checked first checkbox');

    cy.get('input[type="checkbox"]').first().uncheck({ force: true });
    cy.task('log','Unchecked first checkbox');

  });
});