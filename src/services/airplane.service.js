const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app.error");
const AirplaneRepository = require("../repositories/airplane-repository");

const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "TypeError") {
      throw new AppError(
        "something went wrong while creating airplane",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    } else if (error.name === "SequelizeValidationError") {
      let explanation = [];

      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cananot create airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cananot get airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplanes = await airplaneRepository.get(id);
    return airplanes;
  } catch (error) {
    console.log(error);

    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("The airplane does not exist", StatusCodes.NOT_FOUND);
    }

    throw new AppError(
      "Cananot get airplanes ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAirplane,
  getAirplanes,
  createAirplane,
};
