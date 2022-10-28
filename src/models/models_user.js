const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Users {
  constructor() {
    this.table = orm.define(
      "users",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        password: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  }

  GetAll() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              username: data.username,
              password: data.password,
            };
            return object;
          });
          resolve(dataFile);
        })
        .catch((err) => {
          console.log(err);
          reject(err.message);
        });
    });
  }

  GetAuth(id_user) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id: `${id_user}`,
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              username: data.username,
              password: data.password,
            };
            return object;
          });
          resolve(dataTheme);
        })
        .catch((err) => {
          console.log(err);
          reject(err.message);
        });
    });
  }

  DeleteData(id_del) {
    return new Promise((resolve, reject) => {
      this.table
        .destroy({
          where: {
            id: id_del,
          },
        })
        .then((res) => {
          resolve("Delete file success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table
        .update(
          {
            username: data.username,
            password: data.password,
          },
          {
            where: {
              id: data.id,
            },
          }
        )
        .then((res) => {
          resolve("Update file success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  AddData(data) {
    return new Promise((resolve, reject) => {
      this.table
        .create(data)
        .then((res) => {
          resolve("Add file success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new Users();
