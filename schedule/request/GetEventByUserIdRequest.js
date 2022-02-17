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
var GetEventByUserIdRequest = /** @class */ (function () {
    function GetEventByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.eventName = null;
        this.userId = null;
    }
    GetEventByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEventByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEventByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEventByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventByUserIdRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    GetEventByUserIdRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventByUserIdRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetEventByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetEventByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetEventByUserIdRequest.fromDict = function (data) {
        return new GetEventByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withEventName(data["eventName"])
            .withUserId(data["userId"]);
    };
    GetEventByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "eventName": this.getEventName(),
            "userId": this.getUserId(),
        };
    };
    return GetEventByUserIdRequest;
}());
exports.default = GetEventByUserIdRequest;
//# sourceMappingURL=GetEventByUserIdRequest.js.map