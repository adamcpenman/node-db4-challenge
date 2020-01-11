const db = require("../data/db-config")

function getRecipes() {
    return db("recipes")
}

function getInstructions(id) {
    return db("steps")
        .select('steps.id', 'recipes.recipe_name', 'steps.step_number', 'steps.instructions')
        .join('recipes', 'recipes.id', "steps.recipe_id")
        .where({ recipe_id: id})
}

function getShoppingList(id) {
    return db("ingredients as i")
        .join("recipe_ingredients as ri", "i.id", "ri.ingredient_id")
        .join("recipes", "ri.recipe_id", "recipes.id")
        .where({ recipe_id: id })
        // .select("i.ingredient_name")
}

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList,
}