import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import { Query } from './query'
import { Mutation } from './mutation'

import { commentTypes } from './resource/comment/comment.schema'
import { postTypes } from './resource/post/post.schema'
import { userTypes } from './resource/user/user.schema'

import { commentResolvers } from './resource/comment/comment.resovers'
import { postResolvers } from './resource/post/post.resovers'
import { userResolvers } from './resource/user/user.resolvers'

const resolvers = merge(
  commentResolvers,
  postResolvers,
  userResolvers
)

const SchemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Query,
    Mutation,
    commentTypes,
    postTypes,
    userTypes
  ], resolvers
})