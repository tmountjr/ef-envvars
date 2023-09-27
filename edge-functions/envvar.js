/**
 * Handle an HTTP request.
 * @param {Request} request The initial request.
 * @param {Object}  context The context object.
 * 
 * @returns {Response} The response to the request.
 */
export const handleHttpRequest = async (request, context) => {
  const { environmentVars } = context

  return new Response(JSON.stringify(environmentVars), {
    status: 200,
    statusText: 'OK',
    headers: {
      'x-edge-function': 'edge-functions/envvar.js',
      'content-type': 'application/json'
    }
  })
}
