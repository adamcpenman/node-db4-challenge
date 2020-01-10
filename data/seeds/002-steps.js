
exports.seed = async (knex) => {
    await knex("steps").insert([
        { recipe_id: 1, step_number: 1, instructions: "Toast Bread"}
    ])
}