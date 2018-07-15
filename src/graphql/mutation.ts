import { commentMutations } from './resource/comment/comment.schema'
import { postMutations } from './resource/post/post.schema'
import { userMutations } from './resource/user/user.schema'

const Mutation = `
  type Mutation {
    ${ commentMutations }
    ${ postMutations }
    ${ userMutations }
  }
`

export {
  Mutation
}