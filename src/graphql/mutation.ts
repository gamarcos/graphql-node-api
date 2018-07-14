import { userMutations } from './resource/user/user.schema'
import { postMutation } from './resource/post/post.schema'
import { commentMutation } from './resource/comment/comment.schema';


const Mutation = `
  type: Mutation(
    ${ commentMutation }
    ${ postMutation }
    ${ userMutations }

  )
`

export {
  Mutation
}