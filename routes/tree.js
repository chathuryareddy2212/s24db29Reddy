var express = require('express');
const tree_controlers= require('../controllers/tree');
var router = express.Router();
/* GET trees */
router.get('/', tree_controlers.tree_view_all_Page );
module.exports = router;
    

/* GET detail tree page */
router.get('/detail', tree_controlers.tree_view_one_Page);


/* GET create tree page */
router.get('/create', tree_controlers.tree_create_Page);


/* GET create update page */
router.get('/update', tree_controlers.tree_update_Page);


/* GET delete tree page */
router.get('/delete', tree_controlers.tree_delete_Page);
