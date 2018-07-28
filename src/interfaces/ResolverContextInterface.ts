import { DbConnection } from "./DbConnectionInterface"
import { AuthUser } from "./AuthUserInterface"

export interface ResolverContext {
  
  db?: DbConnection
  authorization?: String
  user?: AuthUser

}