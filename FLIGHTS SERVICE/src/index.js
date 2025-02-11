const express = require("express");

const apiRoutes = require("./routes/index"); 

const { PORT, logger } = require("./config/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
  console.log("Jai Shree Ram");
  logger.info(`Server is running on port ${PORT}`);
});
