describe('OrangeHRM Screenshot Examples', () => {
it('demonstrates screenshot capabilities', () => {
// Visit login page
cy.visit('/web/index.php/auth/login');
cy.wait(2000);
// Capture entire page
cy.screenshot('login-page');
cy.wait(2000);
// Capture specific element
cy.get('.orangehrm-login-branding').screenshot('login-logo');
// Fill login form
cy.get('input[name="username"]').type('Admin');
cy.get('input[name="password"]').type('admin123');
// Capture filled form
cy.screenshot('login-form-filled');
// Submit form
cy.get('button[type="submit"]').click();
// Verify dashboard and capture
cy.url().should('include', '/dashboard');
cy.wait(2000);
cy.screenshot('dashboard-page');
});
});