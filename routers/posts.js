const express = require('express');
const router = express.Router();
const commander = require('../controllers/postscommander');
const checkware = require('../middlewares/checkware');


// INDEX
router.get('/', commander.index);

// SHOW
router.get('/:id', checkware.checkId, commander.show);

// CREATE
router.post('/', commander.create);

// UPDATE
router.put('/:id', checkware.checkId, commander.update);

// MODIFY
router.patch('/:id', checkware.checkId, commander.modify);

// DESTROY
router.delete('/:id', checkware.checkId, commander.destroy);

// FINITI I ROUTERS, LI ESPORTO
module.exports = router;