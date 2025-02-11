const { StatusCodes } = require("http-status-codes");

const logger = require("../config/logger.config");
const AppError = require("../utils/errors/app.error");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("error in crud repo destroy:", error);
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);

        if (!response){
          throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }

      return response;
    } catch (error) {
      logger.error("error in crud repo get:", error);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("error in crud repo getAll:", error);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("error in crud repo update:", error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
