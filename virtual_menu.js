const rl = require('readline')
const prompts = rl.createInterface(process.stdin, process.stdout)

function main() {
    console.log(`Hi There!  My name is Matilda and I will be your virtual waiteress today.
Please take some time to look over the menu and let me know when you are ready to order!
Just so you know, our meals are $10 and they come with one entrée and two sides.  Anything more will add charges to your total.`)
    
  
   console.log(`
   Here is our entrée menu

   Entrées - 
    Chicken Nuggets
    Chicken Tenders
    Personal Pizza (Cheese or Pepperoni)
    Spaghetti
    Hamburger
    Cheeseburger
    `)

    let readBack = []

    function printOut() {
        readBack.forEach(itemOrdered => {
            console.log(itemOrdered)
        });
    }

    let total = parseInt(10)

    function tip(){
        prompts.question(`Would you like to add a tip? -> `, (willTip) => {
            if(willTip.includes('yes' || 'Yes'))
                prompts.question(`How much would you like to tip? -> $`, (tipAmount) => {
                    total += parseInt(tipAmount),
                    console.log(`
Perfect, here's a list of what I have ordered:`),
                    printOut(),
                    console.log(`
Your total today will be $${total}.  You can pay at the front on your way out!`),
                    prompts.close()
                })
    
            else if(willTip.includes('no' || 'Nso'))
                console.log(`
No worries!  Here's a list of what I have ordered:`),
                printOut(),
                console.log(`
Your total today will be $${total}.  You can pay at the front on your way out!
`),
                prompts.close()
    
            else {
                console.log('That is not on the menu'),
                tip()
            }
        })
    }
 

    function orderEntree(){
        prompts.question(`What would you like to order for your Entrée? -> `, (userOrderEntree) => {
            function cleanEntree() {
                readBack.push(userOrderEntree),
                orderSides()
            }
            if(userOrderEntree.includes('chicken' || 'Chicken' || 'nuggets' || 'Nuggets' || 'tenders' || 'Tenders'))
                console.log(`Oh, the chicken here is so juicy!`),
                cleanEntree()

            else if(userOrderEntree.includes('pizza' || 'Pizza' || 'pepperoni' || 'Pepperoni' || 'cheese' || 'Cheese'))
                console.log(`The pizza here is a bit greasy but the flavor makes up for that.`),
                cleanEntree()

            else if(userOrderEntree.includes('spaghetti' || 'Spaghetti'))
                console.log(`You can't go wrong with pasta!`),
                cleanEntree()

            else if(userOrderEntree.includes('hamburger' || 'Hamburger'))
                console.log(`Ah, a burger kind of guy!`),
                cleanEntree()

            else if(userOrderEntree.includes('cheeseburger' || 'Cheeseburger'))
                console.log(`The cheese will melt in your mouth!`),
                cleanEntree()

            else{
                console.log('That is not on the menu'),
                orderEntree()
            }
        })
    }
    function orderSides() {
        console.log(`
Here is our sides menu 

Sides -
Fries
Onion Rings
Fried Green Beans
Fried Eggplant
Pot Stickers
`)
        prompts.question('What would you like for your sides? (First side, Second side) ->  ', (userOrderSides) => {
            
            function cleanSides() {
                readBack.push(userOrderSides),
                prompts.question('Would you like to add another side? (Yes or No) -> ', (additionalSide) => {
                    if(additionalSide.includes('No' || 'no'))
                        tip()
                    else if(additionalSide.includes('yes' || 'Yes'))
                        prompts.question('What would you like for your sides? ->  ', (userOrderAdditionalSide) => {
                            function cleanAdditionalSide(){
                                total += parseInt(3)
                                readBack.push(userOrderAdditionalSide)
                                tip()
                            }
                            cleanAdditionalSide()
                        })
                    else {
                        console.log('Sorry, that is not an option.')
                        cleanSides()
                    }
                    })
            }
            

            if(userOrderSides.includes('fries' || 'Fries'))
                console.log('Salty and delicious!'),
                cleanSides()

            else if(userOrderSides.includes('onion' || 'Onion'))
                console.log('The best in town!'),
                cleanSides()

            else if(userOrderSides.includes('beans' || 'Beans'))
                console.log('Most people love them!'),
                cleanSides()

            else if(userOrderSides.includes('eggplant' || 'Eggplant'))
                console.log("Eggplant lovers won't stop talking about them!"),
                cleanSides()

            else if(userOrderSides.includes('pot' || 'Pot' || 'stickers' || 'Stickers'))
                console.log("A classic!"),
                cleanSides()
                
            else {
                console.log('That is not on our menu.'),
                orderSides()
            }
            
        })
    }

    orderEntree()
}

  
main()

console.log("https://github.com/wjosephmark")