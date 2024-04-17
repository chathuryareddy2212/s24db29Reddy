const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
    tree_name: {
        type: String,
        minlength: 3,
        maxlength: 15,
    },


    lifespan: {
        type: Number,
        min: 1,
        max: 1200,
    },


    leafcolor: String
})
module.exports = mongoose.model("tree", treeSchema)