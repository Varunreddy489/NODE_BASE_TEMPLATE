const express = require("express");

const cityRoutes = require("./city.routes.js");
const airplaneRoutes = require("./airplane.routes.js");
const airportRoutes = require("./airport.routes.js");
const flightRoutes = require("./flight.routes.js");

const router = express.Router();

router.use("/cities", cityRoutes);
router.use("/flights", flightRoutes);
router.use("/airports", airportRoutes);
router.use("/airplanes", airplaneRoutes);

module.exports = router;
