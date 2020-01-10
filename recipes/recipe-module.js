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

module.exports = {
    getRecipes,
    getInstructions,
}