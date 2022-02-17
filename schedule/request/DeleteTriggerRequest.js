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
var DeleteTriggerRequest = /** @class */ (function () {
    function DeleteTriggerRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.triggerName = null;
    }
    DeleteTriggerRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTriggerRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTriggerRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTriggerRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTriggerRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteTriggerRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTriggerRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTriggerRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteTriggerRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteTriggerRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteTriggerRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    DeleteTriggerRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    DeleteTriggerRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    DeleteTriggerRequest.fromDict = function (data) {
        return new DeleteTriggerRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTriggerName(data["triggerName"]);
    };
    DeleteTriggerRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "triggerName": this.getTriggerName(),
        };
    };
    return DeleteTriggerRequest;
}());
exports.default = DeleteTriggerRequest;
//# sourceMappingURL=DeleteTriggerRequest.js.map