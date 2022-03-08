import AbstractGs2WebSocketClient from '../core/AbstractGs2WebSocketClient';
import { Gs2WebSocketSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';
export default class Gs2GatewayWebSocketClient extends AbstractGs2WebSocketClient {
    constructor(session: Gs2WebSocketSession);
    setUserId(request: Request.SetUserIdRequest): Promise<Result.SetUserIdResult>;
}
