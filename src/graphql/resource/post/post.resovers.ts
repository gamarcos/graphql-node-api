import { GraphQLResolveInfo } from "graphql"

import { DbConnection } from "../../../interfaces/DbConnectionInterface"
import { PostInterface } from "../../../models/PostModel"
import { Transaction } from "../../../../node_modules/@types/sequelize"
import { handleError } from "../../../utils/utils"

export const postResolvers = {

  Post: {
    author:(post, args, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.User.findById(post.get('author'))
      .catch(handleError)
    },

    comments:(post, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.Comment
        .findAll({
          where: { post: post.get('id') },
          limit: first,
          offset: offset
        })
        .catch(handleError)
    } 
  },

  Query: {
    posts: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.Post
        .findAll({
          limit: first,
          offset: offset
        })
        .catch(handleError)
    },

    post: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      id = parseInt(id)
      return db.Post
        .findById(id)
        .then((post: PostInterface) => {
          if (!post) throw new Error(`Post with id ${id} not found!`)
          return post
        }).catch(handleError)

    }
  },

  Mutation: {
    createPost: (parent, { input }, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Post.create(input, {transaction: t})
      }).catch(handleError)
    },
    
    updatePost: (parent, {id, input }, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      id = parseInt(id)
      return db.sequelize.transaction((t: Transaction) => {
        return db.Post
          .findById(id)
          .then((post: PostInterface) => {
            if (!post) throw new Error(`Post with id ${id} not found!`)
            return post.update(input, {transaction: t})
          })  
      }).catch(handleError)
    },

    deletePost: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      id = parseInt(id)
      return db.sequelize.transaction((t: Transaction) => {
        return db.Post
          .findById(id)
          .then((post: PostInterface) => {
            if (!post) throw new Error(`Post with id ${id} not found!`)
            return post.destroy({transaction: t})
              .then(post => !!post)
          })  
      }).catch(handleError)
    }
  }
}