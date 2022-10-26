const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class Project {
  constructor() {
    this.table = orm.define(
      "projects",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        type_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        genre_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        title_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        child_title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        year_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        place_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        short_desc: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        about: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        impression_result: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        media_result: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        desc_result: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_image_cover: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_website: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url_video: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  }

  GetDetail(id_project) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id: id_project,
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              type_project: data.type_project,
              genre_project: data.genre_project,
              title_project: data.title_project,
              child_title: data.child_title,
              year_project: data.year_project,
              place_project: data.place_project,
              short_desc: data.short_desc,
              about: data.about,
              impression_result: data.impression_result,
              media_result: data.media_result,
              desc_result: data.desc_result,
              url_image_cover: newLink(data.url_image_cover),
              url_website: data.url_website,
              url_video: data.url_video,
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

  GetAllOriginalIP() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type_project: "Original IP",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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

  GetAllB2B() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            type_project: "B2B",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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

  GetAllOriginalIP_Experiences() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            genre_project: "Experiences",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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

  GetAllOriginalIP_Content() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            genre_project: "Content",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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

  GetAllB2B_MarketingSponsorship() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            genre_project: "Marketing & Sponsorship",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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

  GetAllB2B_CeremonyEvents() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            genre_project: "Ceremonies & Events",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              title_project: data.title_project,
              child_title: data.child_title,
              place_project: data.place_project,
              url_image_cover: newLink(data.url_image_cover),
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
            type_project: data.type_project,
            genre_project: data.genre_project,
            title_project: data.title_project,
            child_title: data.child_title,
            year_project: data.year_project,
            place_project: data.place_project,
            short_desc: data.short_desc,
            about: data.about,
            impression_result: data.impression_result,
            media_result: data.media_result,
            desc_result: data.desc_result,
            url_image_cover: data.url_image_cover,
            url_website: data.url_website,
            url_video: data.url_video,
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

module.exports = new Project();
