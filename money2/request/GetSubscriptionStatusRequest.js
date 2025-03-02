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
var GetSubscriptionStatusRequest = /** @class */ (function () {
    function GetSubscriptionStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.contentName = null;
    }
    GetSubscriptionStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscriptionStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscriptionStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscriptionStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSubscriptionStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    GetSubscriptionStatusRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetSubscriptionStatusRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    GetSubscriptionStatusRequest.fromDict = function (data) {
        return new GetSubscriptionStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withContentName(data["contentName"]);
    };
    GetSubscriptionStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "contentName": this.getContentName(),
        };
    };
    return GetSubscriptionStatusRequest;
}());
exports.default = GetSubscriptionStatusRequest;
//# sourceMappingURL=GetSubscriptionStatusRequest.js.map