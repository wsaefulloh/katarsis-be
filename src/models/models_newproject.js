const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const submenu = require("./models_submenu");
const newLink = require("../helpers/get-id-link");

class NewProjects {
  constructor() {
    this.table = orm.define(
      "new_projects",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name_menu: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        id_submenu: {
          type: DataTypes.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: {
            model: "submenus",
            key: "id",
          },
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
        metrics_one_title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        metrics_one_desc: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        metrics_two_title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        metrics_two_desc: {
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

    this.table.belongsTo(submenu.table, {
      foreignKey: "id_submenu",
      as: "submenu",
    });
  }

  GetProjectbyID(id) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id_project: id,
          },
          order: [["id", "DESC"]],
          include: [
            {
              model: submenu.table,
              as: "submenu",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_submenu: data.id_submenu,
              name_menu: data.name_menu,
              name_submenu: data.submenu.name_submenu,
              title_project: data.title_project,
              child_title: data.child_title,
              year_project: data.year_project,
              place_project: data.place_project,
              short_desc: data.short_desc,
              about: data.about,
              metrics_one_title: data.metrics_one_title,
              metrics_one_desc: data.metrics_one_desc,
              metrics_two_title: data.metrics_two_title,
              metrics_two_desc: data.metrics_two_desc,
              desc_result: data.desc_result,
              url_image_cover: newLink(data.url_image_cover),
              url_image_coverOrigin: data.url_image_cover,
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

  GetNextandPrevProjectbyID(id, id_submenu) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id_submenu: id_submenu,
          },
          order: [["id", "ASC"]],
          include: [
            {
              model: submenu.table,
              as: "submenu",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            return data.id;
          });
          const indexProject = (element) => element == id;
          let indexIDProject = dataFile.findIndex(indexProject);
          let next;
          let previous;

          if (indexIDProject + 1 == dataFile.length) {
            next = undefined;
          } else {
            next = indexIDProject + 1;
          }

          if (indexIDProject - 1 == -1) {
            previous = undefined;
          } else {
            previous = indexIDProject - 1;
          }
          const returnNextandPrev = {
            next: dataFile[next],
            previous: dataFile[previous],
          };
          resolve(returnNextandPrev);
        })
        .catch((err) => {
          console.log(err);
          reject(err.message);
        });
    });
  }

  GetProjectbyMenu(name_menu) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            name_menu: name_menu,
          },
          order: [["id", "DESC"]],
          include: [
            {
              model: submenu.table,
              as: "submenu",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_submenu: data.id_submenu,
              name_menu: data.name_menu,
              name_submenu: data.submenu.name_submenu,
              title_project: data.title_project,
              child_title: data.child_title,
              year_project: data.year_project,
              place_project: data.place_project,
              short_desc: data.short_desc,
              about: data.about,
              metrics_one_title: data.metrics_one_title,
              metrics_one_desc: data.metrics_one_desc,
              metrics_two_title: data.metrics_two_title,
              metrics_two_desc: data.metrics_two_desc,
              desc_result: data.desc_result,
              url_image_cover: newLink(data.url_image_cover),
              url_image_coverOrigin: data.url_image_cover,
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

  GetProjectbySubMenu(id) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id_submenu: id,
          },
          order: [["id", "DESC"]],
          include: [
            {
              model: submenu.table,
              as: "submenu",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_submenu: data.id_submenu,
              name_menu: data.name_menu,
              name_submenu: data.submenu.name_submenu,
              title_project: data.title_project,
              child_title: data.child_title,
              year_project: data.year_project,
              place_project: data.place_project,
              short_desc: data.short_desc,
              about: data.about,
              metrics_one_title: data.metrics_one_title,
              metrics_one_desc: data.metrics_one_desc,
              metrics_two_title: data.metrics_two_title,
              metrics_two_desc: data.metrics_two_desc,
              desc_result: data.desc_result,
              url_image_cover: newLink(data.url_image_cover),
              url_image_coverOrigin: data.url_image_cover,
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

  GetAllProject() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          order: [["id", "DESC"]],
          include: [
            {
              model: submenu.table,
              as: "submenu",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_submenu: data.id_submenu,
              name_menu: data.name_menu,
              name_submenu: data.submenu.name_submenu,
              title_project: data.title_project,
              child_title: data.child_title,
              year_project: data.year_project,
              place_project: data.place_project,
              short_desc: data.short_desc,
              about: data.about,
              metrics_one_title: data.metrics_one_title,
              metrics_one_desc: data.metrics_one_desc,
              metrics_two_title: data.metrics_two_title,
              metrics_two_desc: data.metrics_two_desc,
              desc_result: data.desc_result,
              url_image_cover: newLink(data.url_image_cover),
              url_image_coverOrigin: data.url_image_cover,
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

  UpdateData(data) {
    return new Promise((resolve, reject) => {
      this.table
        .update(
          {
            id_submenu: data.id_submenu,
            name_menu: data.name_menu,
            title_project: data.title_project,
            child_title: data.child_title,
            year_project: data.year_project,
            place_project: data.place_project,
            short_desc: data.short_desc,
            about: data.about,
            metrics_one_title: data.metrics_one_title,
            metrics_one_desc: data.metrics_one_desc,
            metrics_two_title: data.metrics_two_title,
            metrics_two_desc: data.metrics_two_desc,
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
          resolve("Update project success");
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
          resolve("Add project success");
        })
        .catch((err) => {
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
          resolve("Delete project success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new NewProjects();
