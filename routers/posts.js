const express = require('express');
const router = express.Router();
const commander = require('../controllers/postscommander');

// INDEX
router.get('/', commander.index);

// SHOW
router.get('/:id', commander.show);

// CREATE
router.post('/', commander.create);

// UPDATE
router.put('/:id', commander.update);

// MODIFY
router.patch('/:id', commander.modify);

// DESTROY
router.delete('/:id', commander.destroy);

// FINITI I ROUTERS, LI ESPORTO
module.exports = router;