module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("Session", {
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Session;
}