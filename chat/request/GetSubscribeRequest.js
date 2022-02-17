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
var GetSubscribeRequest = /** @class */ (function () {
    function GetSubscribeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.accessToken = null;
    }
    GetSubscribeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    GetSubscribeRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetSubscribeRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetSubscribeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSubscribeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRequest.fromDict = function (data) {
        return new GetSubscribeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withAccessToken(data["accessToken"]);
    };
    GetSubscribeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetSubscribeRequest;
}());
export default GetSubscribeRequest;
//# sourceMappingURL=GetSubscribeRequest.js.map