const postTypes = `
  type Post {
    id: ID!
    title: String!
    content: String!
    photo: String
    createdAt: String!
    updatedAt: String!
    author: User!
    comments: [ Comment! ]
  }

  input PostInput {
    title: String!
    content: String!
    photo: String
    author: User!
  }
`

const postQueries = `
  posts(first: Int, offset: Int): [ Post! ]
  post(id: ID!): Post
`
const postMutation = `
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID!)
`
export {
  postTypes,
  postQueries,
  postMutation
}