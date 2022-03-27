
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function closePopup(){
    it("Close pop-up", () => {
        //cy.get('[name="Accept all"]').click();
        cy.get('button[id="onetrust-accept-btn-handler"]').click()
    })
}

describe('Simple TC start', () => {
    // Need to move other js file
    it('Login in the Staging', () => {
        cy.visit('/', {
            auth: {
                username: 'on',
                password: 'trend',
            },
        })
    });

    // TODO : Need to find a way to not calling several times
    closePopup()

    it("Click Category", () => {
        // TODO : It is under another element, so need to find a way do not use force
        cy.get('.site-header').contains('Women').click({force: true});
    })

    closePopup()

    it("Select any of item", () => {
        // Select random item in the category
        cy.get('.card-visual-box__image--contain')
            .then($options => {
                const count = $options.length
                const randomIndex = Math.floor(Math.random() * count)
                $options.eq(randomIndex).click()
            })
    })

    closePopup()

    it("Choose size for item", () => {
        // Need to select size which available
        cy.get('.sizes__size')
            .should('not.contain', 'sizes__size--no-stock')
            .first()
            .click({force: true})
    })

    it("Add to cart", () => {
        // TODO : remove wait, Need to find a way of waiting page load
        cy.wait(5000);
        cy.contains('[class=button__inner]', 'Add to cart')
            .click({force: true})
    })

    it("Check out", () => {
        // TODO : remove wait, Need to find a way of waiting page load
        cy.wait(5000);
        cy.contains('Checkout').click()
        //cy.get('a[href*="/cart"]').contains('Checkout').click()
    })

    it("Builling step 1 Customer information", () => {
        //input email address
    })

});