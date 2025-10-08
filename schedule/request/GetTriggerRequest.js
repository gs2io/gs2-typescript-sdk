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
var GetTriggerRequest = /** @class */ (function () {
    function GetTriggerRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.triggerName = null;
    }
    GetTriggerRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTriggerRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTriggerRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTriggerRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTriggerRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTriggerRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTriggerRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTriggerRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTriggerRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTriggerRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetTriggerRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTriggerRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTriggerRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    GetTriggerRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    GetTriggerRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    GetTriggerRequest.fromDict = function (data) {
        return new GetTriggerRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTriggerName(data["triggerName"]);
    };
    GetTriggerRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "triggerName": this.getTriggerName(),
        };
    };
    return GetTriggerRequest;
}());
exports.default = GetTriggerRequest;
//# sourceMappingURL=GetTriggerRequest.js.map