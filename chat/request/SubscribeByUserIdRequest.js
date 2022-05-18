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
var SubscribeByUserIdRequest = /** @class */ (function () {
    function SubscribeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.userId = null;
        this.notificationTypes = null;
        this.duplicationAvoider = null;
    }
    SubscribeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubscribeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubscribeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubscribeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    SubscribeByUserIdRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getNotificationTypes = function () {
        return this.notificationTypes;
    };
    SubscribeByUserIdRequest.prototype.setNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubscribeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubscribeByUserIdRequest.fromDict = function (data) {
        return new SubscribeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withUserId(data["userId"])
            .withNotificationTypes(data.notificationTypes ?
            data.notificationTypes.map(function (item) {
                return Gs2Chat.NotificationType.fromDict(item);
            }) : []);
    };
    SubscribeByUserIdRequest.prototype.toDict = function () {
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
    return SubscribeByUserIdRequest;
}());
exports.default = SubscribeByUserIdRequest;
//# sourceMappingURL=SubscribeByUserIdRequest.js.map