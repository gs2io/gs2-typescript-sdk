"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteMessageRequest = /** @class */ (function () {
    function DeleteMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
        this.messageName = null;
    }
    DeleteMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMessageRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DeleteMessageRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteMessageRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteMessageRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteMessageRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMessageRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMessageRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    DeleteMessageRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    DeleteMessageRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    DeleteMessageRequest.fromDict = function (data) {
        return new DeleteMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"]);
    };
    DeleteMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
        };
    };
    return DeleteMessageRequest;
}());
exports.default = DeleteMessageRequest;
//# sourceMappingURL=DeleteMessageRequest.js.map