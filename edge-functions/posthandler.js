/**
 * Handle a POST request.
 * @param {Request} request The initial request.
 * @returns {Response} The response to the request.
 */
export const handleHttpRequest = async (request) => {
  const body = await request.json()
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'x-edge-function': 'edge-functions/posthandler.js',
      'content-type': 'application/json'
    }
  })
}
