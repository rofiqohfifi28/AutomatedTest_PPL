describe('empty cart', () => { 
 
    it('Click button Empty Cart, click button continue, and filled cart', () => { 
      //login 
      cy.visit('http://localhost/pet_shop/') 
      cy.get('#login-btn').click() 
      cy.get('#login-form > :nth-child(1) > .form-control').type('johnmichael@mail.com') 
      cy.get(':nth-child(2) > .form-control').type('jmichael') 
      cy.get('#login-form > .d-flex > .btn').click() 
      //access empty cart 
      cy.get('.mr-2').click() 
      cy.get('#empty_cart').click() 
      cy.get('#confirm').click() 
    }) 
     
    it('Click button Empty Cart, click button close, and filled cart', () => { 
      //login 
      cy.visit('http://localhost/pet_shop/') 
      cy.get('#login-btn').click() 
      cy.get('#login-form > :nth-child(1) > .form-control').type('johnmichael@mail.com') 
      cy.get(':nth-child(2) > .form-control').type('jmichael') 
      cy.get('#login-form > .d-flex > .btn').click() 
      //access empty cart 
      cy.get('.mr-2').click() 
      cy.get('#empty_cart').click() 
      cy.get('#confirm_modal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click() 
    }) 
     
    it('Click button Empty Cart, click button continue, and empty cart', () => { 
      //login 
      cy.visit('http://localhost/pet_shop/') 
      cy.get('#login-btn').click() 
      cy.get('#login-form > :nth-child(1) > .form-control').type('johnmichael@mail.com') 
      cy.get(':nth-child(2) > .form-control').type('jmichael') 
      cy.get('#login-form > .d-flex > .btn').click() 
      //access empty cart 
      cy.get('.mr-2').click() 
      cy.get('#empty_cart').click() 
      cy.get('#confirm').click() 
    }) 
  })