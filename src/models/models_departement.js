const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Departement {
  constructor() {
    this.table = orm.define(
      "departements",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        title_departement: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        description_departement: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  }

  GetDetail(id_departement) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id: id_departement,
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_departement: data.title_departement,
              description_departement: data.description_departement,
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
              title_departement: data.title_departement,
              description_departement: data.description_departement,
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
            title_departement: data.title_departement,
            description_departement: data.description_departement,
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

module.exports = new Departement();
