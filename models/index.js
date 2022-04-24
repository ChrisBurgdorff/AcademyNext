'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Model Associations
db.courses = require("./course")(sequelize, Sequelize);
db.sessions = require("./session")(sequelize, Sequelize);
db.students = require("./student")(sequelize, Sequelize);
db.teachers = require("./teacher")(sequelize, Sequelize);
db.courses.hasOne(db.teachers);
db.teachers.belongsToMany(db.courses, {through: 'courses_teachers'});
db.courses.hasMany(db.students);
db.students.belongsToMany(db.courses, {through: 'courses_students'});
db.courses.hasMany(db.sessions);
db.sessions.belongsto(db.courses);

//Export db
module.exports = db;
