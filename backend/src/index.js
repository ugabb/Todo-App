const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connectDb = require("./db/connects");
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json());
app.use("/todos", routes);

const port = 3000;

const start = async () => {
  try {
    await connectDb();
    app.listen(port, console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();