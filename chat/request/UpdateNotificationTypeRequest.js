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
var UpdateNotificationTypeRequest = /** @class */ (function () {
    function UpdateNotificationTypeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.accessToken = null;
        this.notificationTypes = null;
        this.duplicationAvoider = null;
    }
    UpdateNotificationTypeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNotificationTypeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNotificationTypeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNotificationTypeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    UpdateNotificationTypeRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateNotificationTypeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getNotificationTypes = function () {
        return this.notificationTypes;
    };
    UpdateNotificationTypeRequest.prototype.setNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateNotificationTypeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateNotificationTypeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateNotificationTypeRequest.fromDict = function (data) {
        return new UpdateNotificationTypeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withAccessToken(data["accessToken"])
            .withNotificationTypes(data.notificationTypes ?
            data.notificationTypes.map(function (item) {
                return Gs2Chat.NotificationType.fromDict(item);
            }) : null);
    };
    UpdateNotificationTypeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "accessToken": this.getAccessToken(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return UpdateNotificationTypeRequest;
}());
exports.default = UpdateNotificationTypeRequest;
//# sourceMappingURL=UpdateNotificationTypeRequest.js.map