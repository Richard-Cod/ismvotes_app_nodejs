const express = require("express");
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);

require("./startup/db")();


const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;