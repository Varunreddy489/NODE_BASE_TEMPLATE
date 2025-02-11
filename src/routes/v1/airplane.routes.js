const express = require("express");

const {
    getAirplanesController,
    createAirplaneController,
    destroyAirplaneController,
    getAirplaneByIdController,
} = require("../../controllers");
const { validateCreateRequest } = require("../../middleware");

const router = express.Router();

router.get("/", getAirplanesController);
router.get("/:id", getAirplaneByIdController);
router.delete("/:id", destroyAirplaneController);
router.post("/", validateCreateRequest, createAirplaneController);

module.exports = router;
