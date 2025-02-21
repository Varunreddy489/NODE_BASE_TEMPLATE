const express = require("express");

const { CityMiddleware } = require("../../middleware");
const { CityController } = require("../../controllers");

const router = express.Router();

// /api/v1/cities POST
router.post(
  "/",
  CityMiddleware.validateCreateRequest,
  CityController.createCity
);

module.exports = router;

