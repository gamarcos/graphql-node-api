import * as Sequelize from 'sequelize'
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface CommentAttributes {
 id?: string
 comment?: string
 post?: number
 user?: number
 createdAt?: string
 updatedAt?: string
}

export interface CommentInterface extends Sequelize.Instance<CommentAttributes>{}

export interface CommentModel extends BaseModelInterface, Sequelize.Model<CommentInterface, CommentAttributes> {}

export default (Sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): CommentModel => {
  const Comment: CommentModel = Sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
  }, {
    tableName: 'comments'
  })

  Comment.associate = (models: ModelsInterface): void => {
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post'
      }
    })
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        field: 'author',
        name: 'author'
      }
    })
  }
  return Comment
}