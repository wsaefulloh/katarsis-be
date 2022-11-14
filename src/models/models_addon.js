const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Addon {
  constructor() {
    this.table = orm.define(
      "contents",
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
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_images: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        timestamps: false,
      }
    );
  }

  GetHowWeDoIt() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "how-we-do-it",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetAllProcess() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "process",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetWorkflow() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "workflow",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetOurTeam() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "our-team",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetVisi() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "visi-misi",
            title: "vision",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetMission() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "visi-misi",
            title: "mission",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetOriginalIP() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "Original IP",
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
              url_image: newLink(data.url_images),
              description: data.description,
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

  GetB2B() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type: "B2B",
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
              url_image: newLink(data.url_images),
              description: data.description,
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
            url_images: data.url_images,
            description: data.description,
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

module.exports = new Addon();
