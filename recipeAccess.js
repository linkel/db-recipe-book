const knex = require('knex');
const knexConfig = require('./knexfile.js');

db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function getDish(id) { // include list of related recipes
  return db('dishes').where("dishes.id",id)
  .join('recipes', 'recipes.dish_id', 'dishes.id')
  .select("dishes.id", "dishes.dish_name", "recipes.recipe_name")

}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .returning('id')
}

function getRecipes() { // include dishes they belong to
    return db('recipes')
      .join("dishes", "dishes.id", "recipes.dish_id")
      .select("recipes.id", "recipes.recipe_name", "dishes.dish_name");
}

function addRecipe(recipe) {
    return db('recipe')
    .insert(recipe)
    .returning('id')
}