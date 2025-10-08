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
var GetMessageRequest = /** @class */ (function () {
    function GetMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.messageName = null;
        this.password = null;
        this.accessToken = null;
    }
    GetMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    GetMessageRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetMessageRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetMessageRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    GetMessageRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageRequest.prototype.getPassword = function () {
        return this.password;
    };
    GetMessageRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    GetMessageRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    GetMessageRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetMessageRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetMessageRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetMessageRequest.fromDict = function (data) {
        return new GetMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withMessageName(data["messageName"])
            .withPassword(data["password"])
            .withAccessToken(data["accessToken"]);
    };
    GetMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "messageName": this.getMessageName(),
            "password": this.getPassword(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetMessageRequest;
}());
exports.default = GetMessageRequest;
//# sourceMappingURL=GetMessageRequest.js.map