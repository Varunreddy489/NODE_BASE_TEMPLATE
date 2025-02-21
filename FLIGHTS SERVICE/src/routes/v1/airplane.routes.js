const express = require("express");

const { AirplaneMiddleware } = require("../../middleware");
const { AirplaneController } = require("../../controllers");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddleware.validateCreateRequest,
  AirplaneController.createAirplaneController
);

router.get("/", AirplaneController.getAirplanesController);
router.get("/:id", AirplaneController.getAirplaneByIdController);
router.delete("/:id", AirplaneController.destroyAirplaneController);

module.exports = router;
