const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const academicSchema = new Schema({
    academicname: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        url: String,
    },
    rating: {
        type: String,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    }
});

const Academic = mongoose.model("Academic", academicSchema);
module.exports = Academic;