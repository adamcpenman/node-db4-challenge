const express = require('express');

const Recipes = require("./recipe-module");

const router = express.Router()

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given id' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(lists => {
    if (lists) {
      res.json(lists);
    } else {
      res.status(404).json({ message: 'Could not find lists for given id' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get lists' });
  });
});

module.exports = router;