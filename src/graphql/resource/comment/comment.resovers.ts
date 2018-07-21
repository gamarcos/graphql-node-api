import { GraphQLResolveInfo } from "../../../../node_modules/@types/graphql"
import { DbConnection } from "../../../interfaces/DbConnectionInterface"
import { Transaction } from "../../../../node_modules/@types/sequelize"
import { CommentInterface } from "../../../models/CommentModel"
import { handleError } from "../../../utils/utils"

export const commentResolvers = {
  Comment: {
    user: (comment, args, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.User.findById(comment.get('user'))
      .catch(handleError)
    },

    post: (comment, args, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.Post.findById(comment.get('post'))
      .catch(handleError)
    }
  },
  
  Query: {
    commentsByPost: (parent, {postId, first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      postId = parseInt(postId)
      return db.Comment.findAll({
        where: {post: postId},
        limit: first,
        offset: offset
      })
      .catch(handleError)
    }
  },

  Mutation: {
    createComment: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Comment.create(input, {transaction: t})
      })
      .catch(handleError)
    },

    updateComment: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      id = parseInt(id)
      return db.sequelize.transaction((t: Transaction) => {
        return db.Comment
          .findById(id)
          .then((comment: CommentInterface )=> {
            if (!comment) throw new Error(`Comment with ${id} not found!`)
            return comment.update(input, {transaction: t})
          })
      }).catch(handleError)
    },

    deleteComment: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      id = parseInt(id)
      return db.sequelize.transaction((t: Transaction) => {
        return db.Comment
          .findById(id)
          .then((comment: CommentInterface )=> {
            if (!comment) throw new Error(`Comment with ${id} not found!`)
            return comment.destroy({transaction: t})
              .then(comment => !!comment)
          })
      }).catch(handleError)
    }
  }
}