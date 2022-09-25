const express = require("express");
const usersRoutes = require("./routes/users.route");
const dbconnect = require("./utils/dbconnect");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

dbconnect();

app.use("/user", usersRoutes);

async function run() {
  try {
  } finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res.send("No Route Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
