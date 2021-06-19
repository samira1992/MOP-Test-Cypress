describe('Change password',function(){

    it('Change password',function(){
        cy.visit('/')
            cy.get('.css-o6pyxp').click()
            cy.location('pathname').should('eq', '/signup')

            var Email=randomEmail();
            cy.get('[data-testid=email-signup]').type(Email)
           
            function randomEmail(){
                var chars = 'abcdefghijklmnopqr';
                var string = '';
                for(var ii=0; ii<15; ii++)
                    string += chars.charAt(Math.floor(Math.random() * chars.length));
                
                return(string + '@gmail.com');
        }

            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')

            var randomPassword=Password();
            cy.get('[data-testid=password-signup]').type(randomPassword)

            function Password(){
                let text=''
                let alphabet='Aa1!' 
       
                for(let i=0; i<12; i++)
       
                text+=alphabet.charAt(Math.floor(Math.random()*alphabet.length))
       
                return text;
             }

            cy.get('[data-testid=confirm-password-signup]').type(randomPassword)
            cy.get('[data-testid=phone-number-signup]').type('+123')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click({force:true})

            cy.get('[data-testid=registration-code-mfa]', { timeout: 5000 }).type('9999')
            cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
            cy.get('.css-1czsflu', { timeout: 5000 }).click()
            cy.location('pathname').should('eq', '/events');

            cy.get('.css-fi6pgk.easlfcj0').click()
            cy.get('[href="/settings/login-settings"] > .css-zhqoyt > .css-1tj4ne8').click()
            cy.get('[data-testid=password-change]').type(randomPassword)
            
            var newPassword =changePassword();
            cy.get('[data-testid=new-password-change]').type(newPassword)

            function changePassword(){
                let text=''
                let alphabet='Aa1!' 
       
                for(let i=0; i<12; i++)
       
                text+=alphabet.charAt(Math.floor(Math.random()*alphabet.length))
       
                return text;
             }
            
        
           cy.get('[data-testid=confirm-password-change]').type(newPassword)
           cy.get('[data-testid=change-password-button]').click()
           cy.get('.css-5ipae5 > .toastify-container').should('contain', 'Password changed successfully')



})

    it('Change password with incorrect current password',function(){
        cy.visit('/')
         cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('#email').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('#password').type('Test123!').should('have.value','Test123!')
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
         cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
        cy.location('pathname').should('eq', '/login')
        cy.get('#email').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
        cy.get('#password').type('Test123!').should('have.value','Test123!')
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
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
       cy.location('pathname').should('eq', '/login')
       cy.get('#email').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
       cy.get('#password').type('Test123!').should('have.value','Test123!')
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
        cy.get('.e1jqfdaz0.css-66x756.e1n1lbzj0').click()
       cy.location('pathname').should('eq', '/login')
       cy.get('#email').type('samirak@gmail.com').should('have.value', 'samirak@gmail.com')
       cy.get('#password').type('Test123!').should('have.value','Test123!')
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