import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
  {
    id: 1,
    name: 'Gabriel Marcos',
    email: 'gabriel.marcos@gmail.com'
  },
  {
    id: 2,
    name: 'Marcelo Montanher',
    email: 'marcelo.montanher@gmail.com'
  },
  {
    id: 3,
    name: 'Camila Caligari',
    email: 'camila.caligari@gmail.com'
  }
]

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUser: [User!]!
  }
`

const resolvers = {
  Query: {
    allUser: () => users
  }
}

export default makeExecutableSchema({typeDefs, resolvers})