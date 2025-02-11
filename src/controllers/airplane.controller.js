const { StatusCodes } = require("http-status-codes");

const {
  getAirplane,
  getAirplanes,
  createAirplane,
} = require("../services/airplane.service.js");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirplaneController(req, res) {
  try {
    const airplane = await createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);

    return res.status(error.statusCode).json({
      ErrorResponse,
    });
  }
}

async function getAirplanesController(req, res) {
  try {
    const airplane = await getAirplanes();
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);

    return res.status(error.statusCode).json({
      ErrorResponse,
    });
  }
}

async function getAirplaneByIdController(req, res) {
  try {
    const airplane = await getAirplane(req.params.id);
    SuccessResponse.data = airplane;

    return res.status(StatusCodes.CREATED).json({
      SuccessResponse,
    });
  } catch (error) {
    ErrorResponse.error = error;
    console.log(error);

    return res.status(error.statusCode).json({
      ErrorResponse,
    });
  }
}

module.exports = {
  getAirplanesController,
  createAirplaneController,
  getAirplaneByIdController,
};
