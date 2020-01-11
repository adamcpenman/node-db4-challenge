
exports.seed = async (knex) => {
    await knex('recipes').insert([
        {recipe_name: "PB & J"},
        {recipe_name: "Toast"},
        {recipe_name: "BLT"},
        {recipe_name: "Egg Sandwich"},
        {recipe_name: "Sandwich Melt"},
    ])
}