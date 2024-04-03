const mongoose = require("mongoose")
const treeSchema = mongoose.Schema({
tree_name: String,
lifespan: Number,
leafcolor: String
})
module.exports = mongoose.model("tree",treeSchema)