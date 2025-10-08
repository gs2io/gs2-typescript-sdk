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
var DeleteRoomFromBackendRequest = /** @class */ (function () {
    function DeleteRoomFromBackendRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteRoomFromBackendRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRoomFromBackendRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRoomFromBackendRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRoomFromBackendRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DeleteRoomFromBackendRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteRoomFromBackendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteRoomFromBackendRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteRoomFromBackendRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRoomFromBackendRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteRoomFromBackendRequest.fromDict = function (data) {
        return new DeleteRoomFromBackendRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteRoomFromBackendRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteRoomFromBackendRequest;
}());
exports.default = DeleteRoomFromBackendRequest;
//# sourceMappingURL=DeleteRoomFromBackendRequest.js.map