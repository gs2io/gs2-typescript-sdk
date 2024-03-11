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
var UpdateRoomFromBackendRequest = /** @class */ (function () {
    function UpdateRoomFromBackendRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.metadata = null;
        this.password = null;
        this.whiteListUserIds = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UpdateRoomFromBackendRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRoomFromBackendRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRoomFromBackendRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRoomFromBackendRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    UpdateRoomFromBackendRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRoomFromBackendRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getPassword = function () {
        return this.password;
    };
    UpdateRoomFromBackendRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getWhiteListUserIds = function () {
        return this.whiteListUserIds;
    };
    UpdateRoomFromBackendRequest.prototype.setWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withWhiteListUserIds = function (whiteListUserIds) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateRoomFromBackendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UpdateRoomFromBackendRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateRoomFromBackendRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateRoomFromBackendRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateRoomFromBackendRequest.fromDict = function (data) {
        return new UpdateRoomFromBackendRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
            data.whiteListUserIds.map(function (item) {
                return item;
            }) : [])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UpdateRoomFromBackendRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds().map(function (item) {
                    return item;
                }) : [],
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UpdateRoomFromBackendRequest;
}());
exports.default = UpdateRoomFromBackendRequest;
//# sourceMappingURL=UpdateRoomFromBackendRequest.js.map