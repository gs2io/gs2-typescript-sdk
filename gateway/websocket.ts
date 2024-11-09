/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the 'License').
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the 'license' file accompanying this file. This file is distributed
on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import AbstractGs2WebSocketClient from '../core/AbstractGs2WebSocketClient';
import { Gs2Constant, Gs2WebSocketSession } from '../core/model';
import * as Request from './request';
import * as Result from './result';

import axios from 'axios';

export default class Gs2GatewayWebSocketClient extends AbstractGs2WebSocketClient {

    constructor(session: Gs2WebSocketSession) {
        super(session);
    }

    public async setUserId(request: Request.SetUserIdRequest): Promise<Result.SetUserIdResult> {
        const result = await this.session.send(
            "gateway",
            "webSocketSession",
            "setUserId",
            {
                'contextStack': request.getContextStack() ?? null,
                'namespaceName': request.getNamespaceName() ?? null,
                'xGs2AccessToken': request.getAccessToken() ?? null,
                'allowConcurrentAccess': request.getAllowConcurrentAccess() ?? null,
            },
        );
        return Result.SetUserIdResult.fromDict(result);
    }

    public async setUserIdByUserId(request: Request.SetUserIdByUserIdRequest): Promise<Result.SetUserIdResult> {
        const result = await this.session.send(
            "gateway",
            "webSocketSession",
            "setUserIdByUserId",
            {
                'contextStack': request.getContextStack() ?? null,
                'namespaceName': request.getNamespaceName() ?? null,
                'userId': request.getUserId() ?? null,
                'allowConcurrentAccess': request.getAllowConcurrentAccess() ?? null,
            },
        );
        return Result.SetUserIdResult.fromDict(result);
    }
}
