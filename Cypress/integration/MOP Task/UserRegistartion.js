describe('User Registration',function(){
    it('Registration with missing data',function(){
        cy.visit('/')
        cy.get('.css-o6pyxp').click()
        cy.location('pathname').should('eq', '/signup')
        cy.get('[data-testid=email-signup]').type('samira@gmail.com').should('have.value', 'samira@gmail.com')
        cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
        cy.get('[data-testid=signup-button]').click();
        cy.get(':nth-child(3) > .css-11w3vfq').should( 'contain','Password is required.')
        cy.get(':nth-child(4) > .css-11w3vfq').should( 'contain','Confirm password is required.')
        cy.get(':nth-child(5) > .css-11w3vfq').should('contain','Phone number is required. Please use +123 format.')
        cy.get('.css-auo9e3 > .css-11w3vfq').should('contain','Please accept our Terms & Conditions.')

    })

    it('Registration with already used data', function(){
        cy.visit('/')
            cy.get('.css-o6pyxp').click()
            cy.location('pathname').should('eq', '/signup')
            cy.get('[data-testid=email-signup]').type('samira@gmail.com').should('have.value', 'samira@gmail.com')
            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
            cy.get('[data-testid=password-signup]').type('Test123!')
            cy.get('[data-testid=confirm-password-signup]').type('Test123!')
            cy.get('[data-testid=phone-number-signup]').type('+125468622')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click() //sign up button

            cy.get('.Toastify__toast-body > .toastify-container', {timeout: 3000 }).should('contain','user already exists')

  
           

        
        
            
    })

    it('Registration with incorrect e-mail format',function(){
        cy.visit('/')
            cy.get('.css-o6pyxp').click()
            cy.location('pathname').should('eq', '/signup')
            cy.get('[data-testid=email-signup]').type('samira.@gmail.com').should('have.value', 'samira.@gmail.com')
            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
            cy.get('[data-testid=password-signup]').type('Test123!')
            cy.get('[data-testid=confirm-password-signup]').type('Test123!')
            cy.get('[data-testid=phone-number-signup]').type('+125468622')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click()

            cy.get('.css-11w3vfq').contains('Please enter a valid email.')

    })

    it('Registration with incorrect confirmed  password',function(){
        cy.visit('/')
            cy.get('.css-o6pyxp').click()
            cy.location('pathname').should('eq', '/signup')
            cy.get('[data-testid=email-signup]').type('samira@gmail.com').should('have.value', 'samira@gmail.com')
            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
            cy.get('[data-testid=password-signup]').type('Test123!')
            cy.get('[data-testid=confirm-password-signup]').type('Test1234!')
            cy.get('[data-testid=phone-number-signup]').type('+125468622')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click()

            cy.get('.css-11w3vfq.e6873jv0').contains('Both passwords have to be the same.')

    })

    it(' Registration with invalid phone format',function(){
        cy.visit('/')
            cy.get('.css-o6pyxp').click()
            cy.location('pathname').should('eq', '/signup')
            cy.get('[data-testid=email-signup]').type('samira@gmail.com').should('have.value', 'samira@gmail.com')
            cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
            cy.get('[data-testid=password-signup]').type('Test123!')
            cy.get('[data-testid=confirm-password-signup]').type('Test123!')
            cy.get('[data-testid=phone-number-signup]').type('+Asad4856544')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click()

            cy.get('.css-11w3vfq.e6873jv0').contains(' Please use +123 format.')


})
 

   it(' Check the password limit when enter value less than min',function(){
        cy.visit('/')
        cy.get('.css-o6pyxp').click()
        cy.location('pathname').should('eq', '/signup')
        cy.get('[data-testid=email-signup]').type('samira@gmail.com').should('have.value', 'samira@gmail.com')
        cy.get('[data-testid=name-signup]').type('Samira').should('have.value', 'Samira')
        cy.get('[data-testid=password-signup]').type('Test13!')
        
        cy.get('[data-testid=signup-button]').click()

        cy.get('.css-11w3vfq.e6873jv0').contains('Password must be at least 8 characters long, contain both uppercase and lowercase English letters, special character and number.')


    })
     
      
    it('Successful  registration',function(){
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
            cy.get('[data-testid=password-signup]').type('Test123!')
            cy.get('[data-testid=confirm-password-signup]').type('Test123!')
            cy.get('[data-testid=phone-number-signup]').type('+4856544')
            cy.get('.css-2vmmyj.e1n1lbzj0').click()
            cy.get('[data-testid=signup-button]').click()

            cy.get('[data-testid=registration-code-mfa]').type('9999')
            cy.get('.e1jqfdaz0.css-znblm1.e1n1lbzj0').click()
            cy.get('.css-1czsflu').click()
            cy.location('pathname').should('eq', '/events');



})
 })