//testcase1 (Berhasil Checkout)
describe('empty spec', () => {
  it('passes', () => {
    //login
    cy.visit('http://localhost/pet_shop/')
    cy.get('#login-btn').click()
    cy.get('#login-form > :nth-child(1) > .form-control').type('gpolinema@gmail.com')
    cy.get(':nth-child(2) > .form-control').type('123')
    cy.get('#login-form > .d-flex > .btn').click()
    cy.get('.mr-2').click()
    cy.get('.w-100.justify-content-end > .btn').click()

    cy.visit('http://localhost/pet_shop/?p=checkout')
    cy.get('.form-group > .form-control')
    cy.get('.d-flex > .btn').click()

  }) 
  //testcase2 (Jika barang yang di checkout kosong/belum ada maka tidak bisa melakukan payment)
  describe('empty spec', () => {
  it('passes', () => {
  //login
  cy.visit('http://localhost/pet_shop/')
  cy.get('#login-btn').click()
  cy.get('#login-form > :nth-child(1) > .form-control').type('gpolinema@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('123')
  cy.get('#login-form > .d-flex > .btn').click()
  cy.get('.mr-2').click()
  cy.get('#empty_cart')
  cy.get('.w-100.justify-content-end > .btn').click()

  cy.visit('http://localhost/pet_shop/?p=checkout')
  cy.get('.form-group > .form-control')
  cy.get('.d-flex > .btn').click()

})
//test case 3 (jika jika alamat yang diinputkan diisi keterangan lagi maka payment tidak bisa dilakukan)
describe('empty spec', () => {
  it('passes', () => {
  //login
  cy.visit('http://localhost/pet_shop/')
  cy.get('#login-btn').click()
  cy.get('#login-form > :nth-child(1) > .form-control').type('gpolinema@gmail.com')
  cy.get(':nth-child(2) > .form-control').type('123')