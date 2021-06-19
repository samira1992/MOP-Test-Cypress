describe('Edit Account Information', function(){
    it('Edit account information with blank Full name field', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/login')
        cy.get('a[href="/settings"]').click()
        cy.get('[href="/settings/account-information"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.get('[data-testid=name-account-information]').clear()  //"Full name" field
        cy.get ('[data-testid=account-information-button]').click()
        cy.wait(3000)
        cy.get ('.css-11w3vfq.e6873jv0').should('contain','Full name is required.')


    })

    it('Clicking on “Cancel” button in “Account information” form user will be navigated on settings page ', function(){

        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/login')
        cy.get('a[href="/settings"]').click()
        cy.location('pathname').should('eq', '/settings')
        cy.get('[href="/settings/account-information"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.location('pathname').should('eq', '/settings/account-information')
        cy.get('[data-testid=name-account-information]').clear()
        cy.get('[data-testid=name-account-information]').type('Test test')
        cy.get('a > [data-testid]').click()
        cy.wait(3000)
        cy.location('pathname').should('eq', '/settings')
    })

    it('Clicking on “Back” button in “Account information” form user will be navigated on settings page ', function(){

        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/login')
        cy.get('a[href="/settings"]').click()
        cy.location('pathname').should('eq', '/settings')
        cy.get('[href="/settings/account-information"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.location('pathname').should('eq', '/settings/account-information')
        cy.get('[data-testid=name-account-information]').clear()
        cy.get('[data-testid=name-account-information]').type('Test test')
        cy.get('[data-testid=phone-number-account-information]').last().type('address')
        cy.get('.css-1gnl10.easlfcj0').click()
        cy.wait(3000)
        cy.location('pathname').should('eq', '/settings')
    })

    it('Edit account', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.wait(2000)
        cy.location('pathname').should('eq','/events')
        cy.get('a[href="/settings"]').click()
        cy.location('pathname').should('eq', '/settings')
        cy.get('[href="/settings/account-information"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.location('pathname').should('eq', '/settings/account-information')
        cy.get('[data-testid=name-account-information]').clear()
        cy.wait(2000)
        cy.get('[data-testid=name-account-information]').type('Test test')
        cy.get('[data-testid=phone-number-account-information]').last().clear()
        cy.get('[data-testid=phone-number-account-information]').last().type('address')
        cy.get ('[data-testid=account-information-button]').click()
        cy.get('.css-5ipae5 > .toastify-container').should('contain','Account information saved successfully.')
        cy.wait(2000)
        cy.get('a[href="/settings"]').first().click()
        cy.get('.css-4yxaiw.e6873jv0').should('contain','Test test')
    })
})