const foods = [
    {
        id: 1,
        name: "ground beef",
        price: 8,
        primaryMacro: "protein"
    },
    {
        id: 2,
        name: "bread",
        price: 1,
        primaryMacro: "carb"
    },
    {
        id: 3,
        name: "cheese",
        price: 2.50,
        primaryMacro: "fat"
    }
]

function addToShoppingList(id, name, price, macro, date){
    foods.push({
        id: id,
        name: name,
        price: price,
        primaryMacro: macro,
        dateCreated: date
    },
  )
}

let todaysDate=Date()

addToShoppingList(4, "milk", 6, "protein", todaysDate)
addToShoppingList(5, "grapes", 8, "carb", todaysDate)
addToShoppingList(6, "chicken breast", 10, "protein", todaysDate)
addToShoppingList(7, "popcorn", 14, "carb", todaysDate)
addToShoppingList(8, "yogurt", 5, "fat", todaysDate)

for (const food of foods){
    if (food.price > 8){
        console.log(food.name)
    }
}