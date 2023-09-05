const mongoose = require("mongoose")
const Schema = mongoose.Schema

const resourceSchema = Schema({
    title: String,
    resources: {
        type: Schema.Types.Array
    },
})

const resourceModel = mongoose.model('Resource', resourceSchema)

module.exports = resourceModel