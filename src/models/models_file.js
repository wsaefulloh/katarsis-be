const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const project = require("./models_newproject");
const newLink = require("../helpers/get-id-link");

class File {
  constructor() {
    this.table = orm.define(
      "files",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        id_project: {
          type: DataTypes.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: {
            model: "new_projects",
            key: "id",
          },
        },
        title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        place: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        name_project: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        url: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
    this.table.belongsTo(project.table, {
      foreignKey: "id_project",
      as: "project",
    });
  }

  GetFileByIdProject(id_searchProject) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id_project: id_searchProject,
          },
          order: [["id", "DESC"]],
          include: [
            {
              model: project.table,
              as: "project",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_project: data.project.id,
              title: data.title,
              place: data.place,
              name_project: data.name_project,
              url: newLink(data.url),
              urlOrigin: data.url,
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
            title: data.title,
            place: data.place,
            name_project: data.name_project,
            url: data.url,
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

module.exports = new File();
