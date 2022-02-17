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
var GetMessageByUserIdRequest = /** @class */ (function () {
    function GetMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.messageName = null;
        this.password = null;
        this.userId = null;
    }
    GetMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    GetMessageByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    GetMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getPassword = function () {
        return this.password;
    };
    GetMessageByUserIdRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMessageByUserIdRequest.fromDict = function (data) {
        return new GetMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withMessageName(data["messageName"])
            .withPassword(data["password"])
            .withUserId(data["userId"]);
    };
    GetMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "messageName": this.getMessageName(),
            "password": this.getPassword(),
            "userId": this.getUserId(),
        };
    };
    return GetMessageByUserIdRequest;
}());
export default GetMessageByUserIdRequest;
//# sourceMappingURL=GetMessageByUserIdRequest.js.map