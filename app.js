const express = require("express");

const { usersRouter } = require("./routes/users.routes");
const { tasksRouter } = require("./routes/tasks.routes");
const { ordersRouter } = require("./routes/orders.routes");


const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tasks", tasksRouter);
app.use("/api/v1/orders", tasksRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});

module.exports = { app };
