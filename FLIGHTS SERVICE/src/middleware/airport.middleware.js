const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common/index.js");
const AppError = require("../utils/errors/app.error.js");
function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "something went wrong while creating airplort";

    ErrorResponse.error = new AppError(
      ["Name not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json({
      error: ErrorResponse,
    });
  }

  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating city";
    ErrorResponse.error = new AppError(
      ["Airport code not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wrong while creating city";
    ErrorResponse.error = new AppError(
      ["CityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
