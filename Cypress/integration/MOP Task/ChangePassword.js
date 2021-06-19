import { v4 as uuidv4 } from 'uuid';

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

function randomPhone() {
    return `+123${randomNumber()}${randomNumber()}${randomNumber()}${randomNumber()}`
}

describe('Change password',function(){

    it('Change password',function(){
        cy.visit('/')
            cy.get('button').contains('Sign Up').click()
            cy.location('pathname').should('eq', '/signup')

            var Email=randomEmail();
            cy.get('[data-testid=email-signup]').type(Email)
           
            function randomEmail(){
                return(uuidv4() + '@example.com');
            }

            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')

            cy.get('[data-testid=password-signup]').type('Test123!')

            cy.get('[data-testid=confirm-password-signup]').type('Test123!')
            cy.get('[data-testid=phone-number-signup]').type(randomPhone())
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click({force:true})

            cy.get('[data-testid=registration-code-mfa]', { timeout: 5000 }).type('9999')
            cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
            cy.get('.css-1czsflu', { timeout: 5000 }).click()
            cy.location('pathname').should('eq', '/events');

            cy.get('.css-fi6pgk.easlfcj0').click()
            cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
            cy.get('[data-testid=password-change]').type('Test123!')
            
            cy.get('[data-testid=new-password-change]').type('Test123!Changed')
            
        
           cy.get('[data-testid=confirm-password-change]').type('Test123!Changed')
           cy.get('[data-testid=change-password-button]').click()
           cy.get('.css-5ipae5 > .toastify-container').should('contain', 'Password changed successfully')



})

    it('Change password with incorrect current password',function(){
        cy.visit('/')
        cy.get('button').contains('Log in').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/login')
        cy.wait(5000)
        cy.get('.css-fi6pgk.easlfcj0').click()
        cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.get('[data-testid=password-change]').type('test123!zt')
        cy.get('[data-testid=new-password-change]').type('Newpassword1!')
        cy.get('[data-testid=confirm-password-change]').type('Newpassword1!')
        cy.get('[data-testid=change-password-button]').click()
           cy.get('.Toastify__toast-body > .toastify-container').should('contain', 'Current password is wrong, please try again.')




})


     it('Change password with incorrect confirmed password',function(){
         cy.visit('/')
         cy.get('button').contains('Log in').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
        cy.get('[data-testid=login-button]').click()
        cy.location('pathname').should('eq','/events')
        cy.get('.css-fi6pgk.easlfcj0').click()
        cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
        cy.get('[data-testid=password-change]').type('Test123!')
        cy.get('[data-testid=new-password-change]').type('Newpassword1!')
        cy.get('[data-testid=confirm-password-change]').type('testtest')
        cy.get('[data-testid=change-password-button]').click()
        cy.get('.css-11w3vfq.e6873jv0').should('contain','Both passwords have to be the same.')


     })

     it('Clicking on “Cancel” button user will be navigated on settings page ',function(){
        cy.visit('/')
        cy.get('button').contains('Log in').click()
       cy.location('pathname').should('eq', '/login')
       cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
       cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
       cy.get('[data-testid=login-button]').click()
       cy.location('pathname').should('eq','/events')
       cy.get('.css-fi6pgk.easlfcj0').click()
       cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
       cy.get('[data-testid=password-change]').type('Test123!')
       cy.get('[data-testid=new-password-change]').type('Newpassword1!')
       cy.get('[data-testid=confirm-password-change]').type('Newpassword1')
       cy.get('.e1jqfdaz0.css-1gpvqry.e1n1lbzj0').click()
       
         cy.location('pathname').should('eq','/settings')

    })
      

    it('Clicking on “Back” button user will be navigated on settings page ',function(){
        cy.visit('/')
        cy.get('button').contains('Log in').click()
       cy.location('pathname').should('eq', '/login')
       cy.get('[data-testid=email-login]').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
       cy.get('[data-testid=password-login]').type('Test123!').should('have.value','Test123!')
       cy.get('[data-testid=login-button]').click()
       cy.location('pathname').should('eq','/events')
       cy.get('.css-fi6pgk.easlfcj0').click()
       cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
       cy.get('[data-testid=password-change]').type('Test123!')
       cy.get('[data-testid=new-password-change]').type('Newpassword1!')
       cy.get('[data-testid=confirm-password-change]').type('Newpassword1')
       cy.get('.css-1gnl10.easlfcj0').click()
       
         cy.location('pathname').should('eq','/settings')

    })

    






    

 
})