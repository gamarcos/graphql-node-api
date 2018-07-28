import * as jwt from 'jsonwebtoken'

import { ComposableResolver } from "./composable.resolver";
import { ResolverContext } from "../../interfaces/ResolverContextInterface";
import { GraphQLFieldResolver } from "../../../node_modules/@types/graphql";
import { JWT_SECRET } from '../../utils/utils';
import { resolve } from 'dns';

export const verifyTokenResolver: ComposableResolver<any, ResolverContext> = 
  (resovler: GraphQLFieldResolver<any, ResolverContext>): GraphQLFieldResolver<any, ResolverContext> => {
    
    return(parent, args, context: ResolverContext, info) => {
      const token: string = context.authorization ? context.authorization.split(' ')[1] : undefined
    
      return jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
        
        if (!err) {
          return resovler(parent, args, context, info)
        }

        throw new Error(`${err.name}: ${err.message}`)

      })
    }
  
  }