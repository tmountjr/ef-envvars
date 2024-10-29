/**
 * Handle an HTTP request.
 * @param {Request} request The initial request.
 * @param {Object}  context The context object.
 * 
 * @returns {Response} The response to the request.
 */
export async function handleHttpRequest(request, context) {
  const { environmentVars } = context

  const url = new URL(request.url)
  const requestedKey = url.pathname.replace(/^\//,'').split('/')[0]
  if (requestedKey !== '') {
    if (requestedKey in environmentVars) {
      return new Response(JSON.stringify({[requestedKey]: environmentVars[requestedKey]}), {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'application/json',
          'x-edge-function': 'edge-functions/envvar.js'
        }
      })
    }
  }

  return new Response(JSON.stringify(environmentVars), {
    status: 200,
    statusText: 'OK',
    headers: {
      'x-edge-function': 'edge-functions/envvar.js',
      'content-type': 'application/json'
    }
  })
}
