# Recipe Book

## Topics

- database modeling.
- migration scripts.
- seeding.
- knex.

## notes for myself

1. yarn init
2. yarn add knex sqlite3 express helmet path cors
3. knex init (to make knexfile)
4. point the knexfile to the database directory, and add useNullAsDefault: true, for the sqlite3 dev environment
5. Set up migrations by means of the following: knex migrate:make add_dishes_table, knex migrate:make add_recipes_table, knex migrate:make add_ingredients_table knex migrate:make add_instructions_table
6. Set up seeds: knex seed:make 001-dishes and etc
7. Run knex migrate:latest and knex seed:run to create the tables and to seed them with data.
8. 


## Assignment

Design the **data model** for a _recipe book_ application, then use `Knex migrations and seeding` functionality to build a `SQLite3` database based on the model and seed it with test data.

The requirements for the system, as stated by the client are:

- have a way to manage dishes. A **dish** is something the client wants to cook like _pizza_ or _tacos_.
- have a way to manage recipes. A **dish** can have different recipes for tacos, like _tex-mex_ or _granny's_. A **recipe** belongs only to one **dish**.
- have a way to manage ingredients.
- a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
- when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
- have a way to save instructions for cooking a recipe.
- have a way to pick a **dish** and a **recipe** and get a _shopping list_ with all the ingredients, and quantity of each, needed to cook the **dish**.

In addition to the `migrations` and `seeding` scripts, write a data access file that **exports** an object with the following functions:

- `getDishes()`: should return a list of all dishes in the database.
- `addDish(dish)`: should add the **dish** to the database and return the `id` of the new **dish**.
- `getDish(id)`: should return the **dish** with the provided `id` and include a list of the related recipes.
- `getRecipes()`: should return a list of all recipes in the database including the **dish** they belong to.
- `addRecipe(recipe)`: should add a **recipe** to the database and return the `id` of the new **recipe**.

Organize and name your files anyway you see fit.

## Stretch Problems

- design and build a RESTful API that makes use of your data access file and publishes endpoints that a client application can use to manage all resources.
- add a method called `getRecipe(id)` to your data access library that should return the recipe with the provided `id`. The recipe should include:
  - name of the dish.
  - name of the recipe.
  - the list of ingredients with the quantity.
- follow the same pattern to add the CRUD operations for other entities in the system.
- add _units of measure_ support for the **ingredient**s.
- add a table of unit of measure convertions, so that we can record the quantity for an **ingredient** using a unit of measure and see the values for other units reading the recipe.
- design and build a front end client for your API.
- add a `getShoppingList(recipeId)` that returns a list of all the recipe's ingredients including the quantity of each.
