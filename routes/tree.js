var express = require('express');
var passport = require('passport');
const tree_controlers = require('../controllers/tree');
var router = express.Router();


// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET trees */
router.get('/', tree_controlers.tree_view_all_Page);
module.exports = router;


/* GET detail tree page */
router.get('/detail', tree_controlers.tree_view_one_Page);


/* GET create tree page */
router.get('/create',secured, tree_controlers.tree_create_Page);


/* GET create update page */
router.get('/update', secured, tree_controlers.tree_update_Page);
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});


/* GET delete tree page */
router.get('/delete',secured, tree_controlers.tree_delete_Page);


