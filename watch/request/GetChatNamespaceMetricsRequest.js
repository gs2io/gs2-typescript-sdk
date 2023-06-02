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
var GetChatNamespaceMetricsRequest = /** @class */ (function () {
    function GetChatNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetChatNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetChatNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetChatNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetChatNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetChatNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetChatNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetChatNamespaceMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetChatNamespaceMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetChatNamespaceMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetChatNamespaceMetricsRequest.fromDict = function (data) {
        return new GetChatNamespaceMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetChatNamespaceMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetChatNamespaceMetricsRequest;
}());
exports.default = GetChatNamespaceMetricsRequest;
//# sourceMappingURL=GetChatNamespaceMetricsRequest.js.map