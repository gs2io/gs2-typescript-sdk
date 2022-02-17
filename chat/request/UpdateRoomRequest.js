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
var UpdateRoomRequest = /** @class */ (function () {
    function UpdateRoomRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.metadata = null;
        this.password = null;
        this.whiteListUserIds = null;
        this.accessToken = null;
    }
    UpdateRoomRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRoomRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRoomRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRoomRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRoomRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRoomRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRoomRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRoomRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRoomRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRoomRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    UpdateRoomRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateRoomRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateRoomRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRoomRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRoomRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRoomRequest.prototype.getPassword = function () {
        return this.password;
    };
    UpdateRoomRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateRoomRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateRoomRequest.prototype.getWhiteListUserIds = function () {
        return this.whiteListUserIds;
    };
    UpdateRoomRequest.prototype.setWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    UpdateRoomRequest.prototype.withWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    UpdateRoomRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateRoomRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateRoomRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateRoomRequest.fromDict = function (data) {
        return new UpdateRoomRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
            data.whiteListUserIds.map(function (item) {
                return item;
            }) : [])
            .withAccessToken(data["accessToken"]);
    };
    UpdateRoomRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds().map(function (item) {
                    return item;
                }) : [],
            "accessToken": this.getAccessToken(),
        };
    };
    return UpdateRoomRequest;
}());
export default UpdateRoomRequest;
//# sourceMappingURL=UpdateRoomRequest.js.map