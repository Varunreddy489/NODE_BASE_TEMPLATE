const { airplaneService, getAirplanes } = require("./airplane.service");

module.exports = {
  ...airplaneService,
  ...getAirplanes, 
};
