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
var WebSocketSession = /** @class */ (function () {
    function WebSocketSession() {
        this.webSocketSessionId = null;
        this.connectionId = null;
        this.namespaceName = null;
        this.userId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    WebSocketSession.prototype.getWebSocketSessionId = function () {
        return this.webSocketSessionId;
    };
    WebSocketSession.prototype.setWebSocketSessionId = function (webSocketSessionId) {
        this.webSocketSessionId = webSocketSessionId;
        return this;
    };
    WebSocketSession.prototype.withWebSocketSessionId = function (webSocketSessionId) {
        this.webSocketSessionId = webSocketSessionId;
        return this;
    };
    WebSocketSession.prototype.getConnectionId = function () {
        return this.connectionId;
    };
    WebSocketSession.prototype.setConnectionId = function (connectionId) {
        this.connectionId = connectionId;
        return this;
    };
    WebSocketSession.prototype.withConnectionId = function (connectionId) {
        this.connectionId = connectionId;
        return this;
    };
    WebSocketSession.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WebSocketSession.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WebSocketSession.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WebSocketSession.prototype.getUserId = function () {
        return this.userId;
    };
    WebSocketSession.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WebSocketSession.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WebSocketSession.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    WebSocketSession.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    WebSocketSession.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    WebSocketSession.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    WebSocketSession.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    WebSocketSession.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    WebSocketSession.fromDict = function (data) {
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
    };
    WebSocketSession.prototype.toDict = function () {
        return {
            "webSocketSessionId": this.getWebSocketSessionId(),
            "connectionId": this.getConnectionId(),
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return WebSocketSession;
}());
export default WebSocketSession;
//# sourceMappingURL=WebSocketSession.js.map