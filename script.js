var pizza = {
    crustType:   ["thin","flat bread", "deep dish", "hand tossed"],
    sauceTypes:  ["italian","pesto", "sweet", "traditional", "marinara" ],
    cheeses:   ["lacey swiss cheese", "mozzarella", "american", "feta"],
    toppings: ["sausage", "pepperoni", "bacon","mushrooms","olives","onions"]
};
    



function pizzaOven(crustType, sauceTypes, cheeses, toppings) {
    var pizza = {};
    pizza.crustType= crustType;
    pizza.sauceTypes= sauceTypes;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
 
    return pizza;
}
    
var pizzaOne = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizzaOne);

var pizzaTwo=pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives","onions"]);
console.log(pizzaTwo);

var pizzaThree=pizzaOven("flat bread", "sweet", "mozzarella", "sausage");
console.log(pizzaThree);


var pizzaFour=pizzaOven("thin", "pesto", ["mozzarella","american"], ["mushrooms","pepperoni","bacon"]);
console.log(pizzaFour);