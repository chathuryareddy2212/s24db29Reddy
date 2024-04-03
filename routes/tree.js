var express = require('express');
const tree_controlers= require('../controllers/tree');
var router = express.Router();
/* GET trees */
router.get('/', tree_controlers.tree_view_all_Page );
module.exports = router;
    