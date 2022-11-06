const { orm } = require("../configs/db");
const { DataTypes, Op, Sequelize } = require("sequelize");
const newLink = require("../helpers/get-id-link");

class SubMenu {
  constructor() {
    this.table = orm.define(
      "submenus",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name_submenu: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        name_menu: {
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
              name_submenu: data.name_submenu,
              name_menu: data.name_menu,
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

  GetAllOriginalIP() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            name_menu: "Original IP",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataGenre = productJSON.map((data) => {
            const object = {
              id: data.id,
              name_submenu: data.name_submenu,
              name_menu: data.name_menu,
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

  GetAllB2B() {
    return new Promise((resolve, reject) => {
      this.table
        .findAll({
          where: {
            name_menu: "B2B",
          },
          order: [["id", "ASC"]],
        })
        .then((res) => {
          const productJSON = res;
          const dataGenre = productJSON.map((data) => {
            const object = {
              id: data.id,
              name_submenu: data.name_submenu,
              name_menu: data.name_menu,
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
          resolve("Delete submenu success");
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
            name_submenu: data.name_submenu,
            name_menu: data.name_menu,
          },
          {
            where: {
              id: data.id,
            },
          }
        )
        .then((res) => {
          resolve("Update submenu success");
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
          resolve("Add submenu success");
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }
}

module.exports = new SubMenu();
