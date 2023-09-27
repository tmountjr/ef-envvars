// This file was added by edgio init.
// You should commit this file to source control.
import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  .use(edgioRoutes)
  .get('/envvars', {
    caching: {
      bypass_cache: true,
      bypass_client_cache: true
    },
    edge_function: './edge-functions/envvar.js'
  })
