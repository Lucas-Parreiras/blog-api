/* eslint-disable max-lines-per-function */
const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING,
          },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });

    Category.associate = (models) => {
      Category.hasMany(
        models.PostCategory,
        { foreingKey: 'categoryId', as: 'psts_categories' },
    );
    };

    return Category;
};

module.exports = CategoryModel;