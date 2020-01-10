exports.seed = async (knex) => {
    await knex("recipe_ingredients").insert([
        {recipe_id: 1, ingredient_id: 1}
    ])
}