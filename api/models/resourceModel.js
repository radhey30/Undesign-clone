const mongoose = require("mongoose")
const Schema = mongoose.Schema

const resourceSchema = Schema({
    icon: String,
    header: String,
    description: String,
    cards: {
        type: Schema.Types.Array
    }
})

const resourceModel = mongoose.model('Resource', resourceSchema)

module.exports = resourceModel