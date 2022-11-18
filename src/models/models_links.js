const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Links {
  constructor() {
    this.table = orm.define(
      "links",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        type: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        title: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        url_images: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: false,
      }
    );
  }

  GetLinkedin() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "linkedin",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetCTAPartnership() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "cta_partnership",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetAllLinks() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "links",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
              url_imageOrigin: data.url_images,
              url_image: newLink(data.url_images),
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

  GetNumber() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "number",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetTiktok() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "tiktok",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetInstagram() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "instagram",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetWhatsapp() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "whatsapp",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetInfo() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "info",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetMarketing() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "marketing",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetPartnership() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "partnership",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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

  GetCareer() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "career",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataTheme = productJSON.map((data) => {
            const object = {
              id: data.id,
              type: data.type,
              title: data.title,
              url: data.url,
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
            type: data.type,
            title: data.title,
            url: data.url,
            url_images: data.url_images,
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

module.exports = new Links();
