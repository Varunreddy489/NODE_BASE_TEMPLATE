const winston = require("winston");

const { combine, timestamp, printf } = winston.format;

const customFormat = printf(function ({ level, message, timestamp }) {
  return timestamp + "  " + level + ": " + message;
});

const logger = winston.createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combines.log" }),
  ],
});

module.exports = logger;
