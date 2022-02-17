/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

export default class WebSocketSession implements IModel {
    private webSocketSessionId: string|null = null;
    private connectionId: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getWebSocketSessionId(): string|null {
        return this.webSocketSessionId;
    }

    public setWebSocketSessionId(webSocketSessionId: string|null) {
        this.webSocketSessionId = webSocketSessionId;
        return this;
    }

    public withWebSocketSessionId(webSocketSessionId: string|null): this {
        this.webSocketSessionId = webSocketSessionId;
        return this;
    }

    public getConnectionId(): string|null {
        return this.connectionId;
    }

    public setConnectionId(connectionId: string|null) {
        this.connectionId = connectionId;
        return this;
    }

    public withConnectionId(connectionId: string|null): this {
        this.connectionId = connectionId;
        return this;
    }

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): WebSocketSession|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new WebSocketSession()
            .withWebSocketSessionId(data["webSocketSessionId"])
            .withConnectionId(data["connectionId"])
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "webSocketSessionId": this.getWebSocketSessionId(),
            "connectionId": this.getConnectionId(),
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
