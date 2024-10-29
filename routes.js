import { Router, edgioRoutes } from '@edgio/core'

export default new Router()
  .use(edgioRoutes)
  .get('/', {
    caching: {
      bypass_cache: true,
      bypass_client_cache: true
    },
    edge_function: './edge-functions/envvar.js'
  })
  .get('/:name', {
    caching: {
      bypass_cache: true,
      bypass_client_cache: true
     },
    edge_function: './edge-functions/envvar.js'
  })
  .post('/posthandler', {
    edge_function: './edge-functions/posthandler.js'
  })
