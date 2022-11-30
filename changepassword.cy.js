describe('change Password', () => {
  it('passes', () => {
    /*
 //valid new password & valid current password
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('fifi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('fifi1234')
    cy.get('#login-form > .d-flex > .btn').click()
    cy.get('[href="./?p=my_account"]').click()
    cy.get('.w-100 > .btn').click()
    cy.get(':nth-child(8) > .form-control').type('fifi1111')
    cy.get(':nth-child(9) > .form-control').type('fifi1234')
    cy.get('#update_account > .d-flex > .btn').click()
    */
    

//Valid new passsword & invalid current password
/*
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('fifi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('fifi1111')
    cy.get('#login-form > .d-flex > .btn').click()
    cy.get('[href="./?p=my_account"]').click()
    cy.get('.w-100 > .btn').click()
    cy.get(':nth-child(8) > .form-control').type('fifi1234')
    cy.get(':nth-child(9) > .form-control').type('fifififi')
    cy.get('#update_account > .d-flex > .btn').click()
    */
    
  
  //Valid new password without current password
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('fifi@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('fifi1111')
    cy.get('#login-form > .d-flex > .btn').click()
    cy.get('[href="./?p=my_account"]').click()
    cy.get('.w-100 > .btn').click()
    cy.get(':nth-child(8) > .form-control').type('fifi1111')
    cy.get(':nth-child(9) > .form-control')
    cy.get('#update_account > .d-flex > .btn').click()
  
    
  })
})