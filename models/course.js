module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Course;
}