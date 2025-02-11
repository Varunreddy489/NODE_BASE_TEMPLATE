const express = require("express");

const { validateCreateRequest } = require("../../middleware");
const {
    getAirplanesController,
    createAirplaneController,
    getAirplaneByIdController,
} = require("../../controllers");

const router = express.Router();

router.get("/", getAirplanesController);
router.get("/:id", getAirplaneByIdController);
router.post("/", validateCreateRequest, createAirplaneController);

module.exports = router;
