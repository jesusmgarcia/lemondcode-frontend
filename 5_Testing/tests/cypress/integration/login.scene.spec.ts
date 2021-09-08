describe('Login Scene specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should user input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.get('@userInput').click();

    // Assert
    cy.get('@userInput').should('have.focus');
  });

  it('should password input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.get('@passwordInput').click();

    // Assert
    cy.get('@passwordInput').should('have.focus');
  });

  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.findByRole('alert').as('loginAlert').should('be.visible');
  });

  it('should navigate to submodule-list url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
