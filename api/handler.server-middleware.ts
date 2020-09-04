import { IncomingMessage, ServerResponse } from 'http'

export default (req: IncomingMessage, res: ServerResponse, next: Function) => {
    console.log('[server-middleware-handler]')
    console.log('[server-middleware-handler] req.baseUrl', req.url)
    console.log('[server-middleware-handler] res.statusMessage', res.statusMessage)
    next()
}
