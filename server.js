const dotenv = require("dotenv");

const { app } = require("./app");
const { cord} = require("cors")

const { initModels } = require("./models/initModels");
const { db } = require("./util/database.util");

dotenv.config({ path: "./config.env" });
app.use(cors());

const startServer = async () => {
  try {
    await db.authenticate();

    initModels();

    await db.sync();

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log("Express app running!!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
