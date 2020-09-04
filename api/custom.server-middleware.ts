import { IncomingMessage, ServerResponse } from 'http'

export default (req: IncomingMessage, res: ServerResponse, next: Function) => {
    console.log('[server-middleware-custom]')
    console.log('[server-middleware-custom] req.baseUrl', req.url)
    console.log('[server-middleware-custom] res.statusMessage', res.statusMessage)
    next()
}
