const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  console.log("getting categories", req, res)
  Category.findAll().then((categories) => {
    if (!categories) res.status(400).json({ "message": "cannot find categories" })
    console.log(categories)
    res.status(200).json(categories)
  })
    .catch((err) => res.status(500).json({ "message": "internal server error" }))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
