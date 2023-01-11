const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set('strictQuery', true)

const connectionUrl = `mongodb+srv://${process.env.TODO_USER_NAME}:${process.env.TODO_USER_PASSWORD}@todo-app.h92egs0.mongodb.net/Todo-App?retryWrites=true&w=majority`;

const connectDb = () => {
  return mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb