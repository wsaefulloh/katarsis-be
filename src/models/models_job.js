const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const departement = require("./models_departement");
const newLink = require("../helpers/get-id-link");

class Job {
  constructor() {
    this.table = orm.define(
      "jobs",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        id_departement: {
          type: DataTypes.INTEGER,
          allowNull: false,
          onDelete: "CASCADE",
          references: {
            model: "departements",
            key: "id",
          },
        },
        job_title: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        city: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        type_job: {
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
    this.table.belongsTo(departement.table, {
      foreignKey: "id_departement",
      as: "departement",
    });
  }

  GetJobByIdDepartement(id_searchDepartement) {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            id_departement: id_searchDepartement,
          },
          order: [["id", "DESC"]],
          include: [
            {
              model: departement.table,
              as: "departement",
            },
          ],
        })
        .then((res) => {
          const productJSON = res;
          const dataFile = productJSON.map((data) => {
            const object = {
              id: data.id,
              id_departement: data.id_departement,
              job_title: data.job_title,
              city: data.city,
              type_job: data.type_job,
              url: data.url,
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
            job_title: data.job_title,
            city: data.city,
            type_job: data.type_job,
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

module.exports = new Job();
