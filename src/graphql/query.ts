import { commentQueries } from './resource/comment/comment.schema'
import { postQueries } from './resource/post/post.schema'
import { userQueries } from './resource/user/user.schema'

const Query = `
  type Query {
    ${ commentQueries }
    ${ postQueries }
    ${ userQueries }
  }
`

export {
  Query
}