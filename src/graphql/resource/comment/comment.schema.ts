const commentType = `
  type Post {
    id: ID!
    commnet: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    post: Post!
  }

  input CommentInput {
    comment: String!
    post: Int!,
    user: Int!
  }
`
const commentQueries = `
  commentsByPost(post: ID!, first: Int, offset: Int): [ Comment! ]!
`
const commentMutation = `
  createComment(input: CommentInput!): Comment
  updatePost(id: ID!, input: CommentInput!): Comment
  deletePost(id: ID!)
`
export {
  commentType,
  commentQueries,
  commentMutation
}