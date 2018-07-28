import * as http from 'http'

import app from './app'
import db from './models'
import { normalizePort, onError, onListening, handleError } from './utils/utils'

const server = http.createServer(app)
const port = normalizePort(process.env.port || 3000)


db.sequelize.sync()
  .then(() => {
    server.listen(port)
    server.on('error', onError(server))
    server.on('listening', onListening(server))    
  }).catch(handleError)