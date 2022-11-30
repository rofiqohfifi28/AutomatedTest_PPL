describe('empty spec', () => {
  it('passes', () => {
    
    // Valid Email & Valid Password

    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('nadifaludvi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('nadifa123')
    cy.get('#login-form > .d-flex > .btn').click()
    

    // Valid Email & Invalid Password
    
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('nadifaludvi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('ludvi123')
    cy.get('#login-form > .d-flex > .btn').click()
    

    // Invalid Email & Valid Password
    
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('ludvinadifa@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('nadifa123')
    cy.get('#login-form > .d-flex > .btn').click()
    

    // Invalid Email & Invalid Password
    
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('ludvi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('nadifa')
    cy.get('#login-form > .d-flex > .btn').click()
    

    // the field is blank and Login button is clicked
    
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control')
    cy.get(':nth-child(2) > .form-control')
    cy.get('#login-form > .d-flex > .btn').click()
    
  })
})