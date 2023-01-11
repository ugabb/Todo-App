const mongoose = require(`mongoose`);

const TodoSchema = new mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Must provide a text for todo'],
        maxlength:[20,"Name can not be more than 20 characters"]
    },
    completed:{
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model("Todo", TodoSchema);