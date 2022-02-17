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
var DeleteTriggerByUserIdRequest = /** @class */ (function () {
    function DeleteTriggerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.triggerName = null;
    }
    DeleteTriggerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTriggerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTriggerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteTriggerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteTriggerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    DeleteTriggerByUserIdRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    DeleteTriggerByUserIdRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    DeleteTriggerByUserIdRequest.fromDict = function (data) {
        return new DeleteTriggerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTriggerName(data["triggerName"]);
    };
    DeleteTriggerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "triggerName": this.getTriggerName(),
        };
    };
    return DeleteTriggerByUserIdRequest;
}());
exports.default = DeleteTriggerByUserIdRequest;
//# sourceMappingURL=DeleteTriggerByUserIdRequest.js.map