const foods = ["kare-kare", "spaghetti", "carbonara"]

foods.push("palabok")
foods.shift()

for (let food of foods) {
    console.log(food)
}

let likedFoods = foods.map(food => `I like ${food}`)
console.log(likedFoods)