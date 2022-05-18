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
var tslib_1 = require("tslib");
var Gs2Chat = tslib_1.__importStar(require("../model"));
var UpdateNotificationTypeByUserIdRequest = /** @class */ (function () {
    function UpdateNotificationTypeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
        this.notificationTypes = null;
        this.duplicationAvoider = null;
    }
    UpdateNotificationTypeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getNotificationTypes = function () {
        return this.notificationTypes;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateNotificationTypeByUserIdRequest.fromDict = function (data) {
        return new UpdateNotificationTypeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"])
            .withNotificationTypes(data.notificationTypes ?
            data.notificationTypes.map(function (item) {
                return Gs2Chat.NotificationType.fromDict(item);
            }) : []);
    };
    UpdateNotificationTypeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "userId": this.getUserId(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateNotificationTypeByUserIdRequest;
}());
exports.default = UpdateNotificationTypeByUserIdRequest;
//# sourceMappingURL=UpdateNotificationTypeByUserIdRequest.js.map