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
var Gs2Chat = (0, tslib_1.__importStar)(require("../model"));
var SubscribeRequest = /** @class */ (function () {
    function SubscribeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.accessToken = null;
        this.notificationTypes = null;
    }
    SubscribeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubscribeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubscribeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubscribeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    SubscribeRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    SubscribeRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    SubscribeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SubscribeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubscribeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SubscribeRequest.prototype.getNotificationTypes = function () {
        return this.notificationTypes;
    };
    SubscribeRequest.prototype.setNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    SubscribeRequest.prototype.withNotificationTypes = function (notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    };
    SubscribeRequest.fromDict = function (data) {
        return new SubscribeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withAccessToken(data["accessToken"])
            .withNotificationTypes(data.notificationTypes ?
            data.notificationTypes.map(function (item) {
                return Gs2Chat.NotificationType.fromDict(item);
            }) : []);
    };
    SubscribeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "accessToken": this.getAccessToken(),
            "notificationTypes": this.getNotificationTypes() ?
                this.getNotificationTypes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return SubscribeRequest;
}());
exports.default = SubscribeRequest;
//# sourceMappingURL=SubscribeRequest.js.map