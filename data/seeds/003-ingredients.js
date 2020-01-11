
exports.seed = async (knex) => {
    await knex("ingredients").insert([
        {ingredient_name: "bread"},
        {ingredient_name: "peanut-butter"},
        {ingredient_name: "jelly"},
        {ingredient_name: "eggs"},
        {ingredient_name: "mayo"},
        {ingredient_name: "bacon"},
        {ingredient_name: "lettuce"},
        {ingredient_name: "tomatoes"},
    ])
}