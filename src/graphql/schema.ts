import { makeExecutableSchema } from 'graphql-tools'

import { Query } from './query'
import { Mutation } from './mutation'

import { commentTypes } from './resource/comment/comment.schema'
import { postTypes } from './resource/post/post.schema'
import { userTypes } from './resource/user/user.schema'

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
  ]
})