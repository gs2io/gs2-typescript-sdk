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
var GetTriggerByUserIdRequest = /** @class */ (function () {
    function GetTriggerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.triggerName = null;
    }
    GetTriggerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTriggerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTriggerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTriggerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetTriggerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    GetTriggerByUserIdRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    GetTriggerByUserIdRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    GetTriggerByUserIdRequest.fromDict = function (data) {
        return new GetTriggerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTriggerName(data["triggerName"]);
    };
    GetTriggerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "triggerName": this.getTriggerName(),
        };
    };
    return GetTriggerByUserIdRequest;
}());
exports.default = GetTriggerByUserIdRequest;
//# sourceMappingURL=GetTriggerByUserIdRequest.js.map