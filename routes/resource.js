var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tree_controller = require('../controllers/tree');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// tree ROUTES ///
// POST request for creating a tree.
router.post('/newtree', tree_controller.tree_create_post);
// DELETE request to delete tree.
router.delete('/treeDelete/:id', tree_controller.tree_delete);
// PUT request to update tree.
router.put('/treeupdate/:id', tree_controller.tree_update_put);
// GET request for one tree.
router.get('/tree/:id', tree_controller.tree_detail);
// GET request for list of all tree items.
router.get('/tree', tree_controller.tree_list);
module.exports = router;



