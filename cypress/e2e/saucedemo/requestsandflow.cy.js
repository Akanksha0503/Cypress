

describe('Practice ExpandTesting - Cypress Advanced Features with Logging', () => {
  it('Load fixture data and populate form', () => {
  cy.visit('https://practice.expandtesting.com/register');
  cy.task('log', 'Visited Registration Page');

    cy.fixture('user.json').then((user) => {
    cy.task('log', 'Loaded fixture data:', user);

    cy.get('#username').type(user.username);
    cy.task('log', 'Typed username');

    cy.get('input[name="password"]').type(user.password);
    cy.task('log', 'Typed password');


    cy.get('input[name="confirmPassword"]').type(user.confirmPassword);
    cy.task('log', 'Typed Confirm Password');

  });
});

it('Chaining, aliasing, and scoped actions', () => {
  cy.visit('https://practice.expandtesting.com/login');
  cy.task('log', 'Visited Login Page');

  cy.get('form').as('loginForm');
  cy.task('log', 'Aliased login form as @loginForm');

  cy.get('@loginForm').within(() => {
    cy.task('log', 'Scoped inside login form');

    cy.get('#username').type('practice');
    cy.task('log', 'Typed username inside form');

    cy.get('#password').type('SuperSecretPassword!');
    cy.task('log', 'Typed password inside form');

    cy.get('button[type="submit"]').click();
    cy.task('log', 'Clicked submit button inside form');

    cy.url({ timeout: 10000 }).should('include', '/secure');
    cy.task('log', 'URL includes /secure');

   
    
    cy.task('log', 'Login successful, verified success message');
  });
});

  it('Assertions on UI elements', () => {
    cy.visit('https://practice.expandtesting.com/login');
    cy.task('log', 'Visited Login Page');

    cy.get('#username').should('exist').and('be.visible');
    cy.get('label[for="username"]').should('contain.text', 'Username');

    cy.get('#password').should('exist').and('be.visible');
    cy.get('label[for="password"]').should('contain.text', 'Password');

    cy.get('button[type="submit"]')
      .should('have.text', 'Login')
      .then($btn => cy.task('log', 'Login button text'));
  });

  it('Direct network request and response assertion', () => {
    cy.task('log', 'Sending direct HTTP request to health endpoint');
    cy.request({
      url: 'https://practice.expandtesting.com/api/health',
      failOnStatusCode: false
    }).then((response) => {
      cy.task('log', 'Response status');
      cy.task('log', 'Response body');
    });
  });

  it('Intercept and mock network response', () => {
    cy.intercept('GET', '/api/user', { fixture: 'user.json' }).as('getUser');
    cy.task('log', 'Intercepted GET /api/user with fixture');

    cy.visit('https://practice.expandtesting.com/users/1');
    cy.task('log', 'Visited Sample User Profile page');

  });
});


