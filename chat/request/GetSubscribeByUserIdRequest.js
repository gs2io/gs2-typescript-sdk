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
var GetSubscribeByUserIdRequest = /** @class */ (function () {
    function GetSubscribeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
    }
    GetSubscribeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    GetSubscribeByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetSubscribeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeByUserIdRequest.fromDict = function (data) {
        return new GetSubscribeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"]);
    };
    GetSubscribeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "userId": this.getUserId(),
        };
    };
    return GetSubscribeByUserIdRequest;
}());
export default GetSubscribeByUserIdRequest;
//# sourceMappingURL=GetSubscribeByUserIdRequest.js.map