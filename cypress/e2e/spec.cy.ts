describe('initial load', () => {
  it('should add a comment and reply to the page, then delete the comment', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // We should have no records currently
    cy.get('[data-testid="comment-box"]').should('have.length', 0)

    cy.get('[data-testid="new-comment-input"]').type('Hello world')
    cy.get('[data-testid="new-comment-btn-add"]').click()

    cy.get('[data-testid="comment-box"]').first().as('working')

    // Cancel a reply
    cy.get('@working').find('[data-testid="comment-box-actions-reply"]').click()
    cy.get('[data-testid="new-reply-input"]').type('This is a mistake')
    cy.get('[data-testid="new-reply-btn-cancel"]').click()

    // Add an actual reply
    cy.get('@working').find('[data-testid="comment-box-actions-reply"]').click()
    cy.get('[data-testid="new-reply-input"]').type('This is good')
    cy.get('[data-testid="new-reply-btn-add"]').click()

    // Show replies
    cy.get('@working').find('[data-testid="comment-box-replies"]').click()

    // There should only be one reply
    cy.get('@working')
      .find('[data-testid="reply-item"]')
      .should('have.length', 1)

    // Now we delete the record
    cy.get('@working')
      .find('[data-testid="comment-box-actions-delete"]')
      .click()

    // We should have no records once more
    cy.get('[data-testid="comment-box"]').should('have.length', 0)
  })
})
