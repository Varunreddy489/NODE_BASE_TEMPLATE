const { StatusCodes } = require("http-status-codes");
const {
  getAirplane,
  getAirplanes,
  createAirplane,
  destroyAirplane,
} = require("../services/airplane.service.js");
const { ErrorResponse, SuccessResponse } = require("../utils/common/index.js");

async function createAirplaneController(req, res) {
  try {
    const airplane = await createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanesController(req, res) {
  try {
    const airplanes = await getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplaneByIdController(req, res) {
  try {
    const airplane = await getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyAirplaneController(req, res) {
  try {
    const airplane = await destroyAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplaneController,
  getAirplanesController,
  getAirplaneByIdController,
  destroyAirplaneController,
};
