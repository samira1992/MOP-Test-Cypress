describe('User Login', function(){
    it ('Verify that Email and Password fields have valid placeholder', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').invoke('attr', 'placeholder').should('contain', 'Enter your email here')
        cy.get('[data-testid=password-login]').invoke('attr', 'placeholder').should('contain', 'Enter your password here')
        
    } )

    it ('Log in with wrong password', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samira@gmail.com').should('have.value','samira@gmail.com')
        cy.get('[data-testid=password-login]').type('Test12345!')
        cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
        
        
        cy.get('.Toastify__toast-body > .toastify-container').should('contain','Wrong email or password.')
        
    } )

    it ('Log in with wrong e-mail', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirs@gmail.com').should('have.value','samirs@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!')
        cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
        
        
        cy.get('.Toastify__toast-body > .toastify-container').should('contain','Wrong email or password.')
        
    } )
          

    it ('Verify that user is not able to log in with blank email or password', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samira@gmail.com').should('have.value','samira@gmail.com')
        cy.get('[data-testid=password-login]').clear()
        cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
        cy.get('.css-11w3vfq.e6873jv0').should('contain','Password is required.')
        
     } )

     it ('Reset password with invalid email', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('.css-pzupde > a').click()
        cy.get('[data-testid=forgot-password-email]').type('samira.@gmail.com')
        cy.get('[data-testid="forgot-password-submit-button"]').click()
        cy.get('.css-11w3vfq.e6873jv0').should('contain','Please enter a valid email.')

        
     } )

     it ('Log in', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/events')


        
     } )

     it ('Log out', function(){
        cy.visit('/')
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/events')
        cy.get('.css-fi6pgk.easlfcj0').click()
        cy.get('.e1jqfdaz0.css-p9k60z.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')

        


        
     } )
})