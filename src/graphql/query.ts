import { userQueries } from './resource/user/user.schema'
import { postQueries } from './resource/post/post.schema'
import { commentQueries } from './resource/comment/comment.schema';


const Query = `
  type: Query(
    ${ commentQueries }
    ${ postQueries }
    ${ userQueries }
  )
`

export {
  Query
}