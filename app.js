const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).json({ status: "Success", message: "true" });
});

try {
  app.listen(8080, () => console.log(`Server running on PORT : 8080`));
} catch (error) {
  console.log(error.message);
}
