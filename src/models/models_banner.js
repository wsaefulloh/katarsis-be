const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Banner {
  constructor() {
    this.table = orm.define(
      "banners",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        title_banner: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        date_banner: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_image: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        button: {
          type: DataTypes.TEXT,
          allowNull: true,
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
              title_banner: data.title_banner,
              date_banner: data.date_banner,
              url_imageOriginal: data.url_image,
              url_image: newLink(data.url_image),
              url: data.url,
              button: data.button,
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
            title_banner: data.title_banner,
            date_banner: data.date_banner,
            url_image: data.url_image,
            url: data.url,
            button: data.button,
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

module.exports = new Banner();
