import middlewareConfig from './middleware.config';
import { createServer, IncomingMessage } from 'node:http';
import { Socket } from 'node:net';
import { handler } from '@vuestorefront/shopify-api'

class VsfIncomingMessage extends IncomingMessage {
  middlewareConfig: any

  constructor(socket: Socket) {
    super(socket)

    this.middlewareConfig = middlewareConfig
  }

  getMiddlewareConfig() {
    return this.middlewareConfig
  }
}

(async () => {
  const server = await createServer({
    IncomingMessage: VsfIncomingMessage
  }, handler)
  
  server.listen(8181)
})();
