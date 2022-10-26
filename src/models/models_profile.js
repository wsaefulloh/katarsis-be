const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Profiles {
  constructor() {
    this.table = orm.define(
      "profiles",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        url_image: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_linkedin: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        position: {
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
          const dataGenre = productJSON.map((data) => {
            const object = {
              id: data.id,
              name: data.name,
              url_image: newLink(data.url_image),
              url_linkedin: data.url_linkedin,
              position: data.position,
            };
            return object;
          });
          resolve(dataGenre);
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
          resolve("Delete genre success");
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
            name: data.name,
            url_image: data.url_image,
            url_linkedin: data.url_linkedin,
            position: data.position,
          },
          {
            where: {
              id: data.id,
            },
          }
        )
        .then((res) => {
          resolve("Update genre success");
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
          resolve("Add genre success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new Profiles();
