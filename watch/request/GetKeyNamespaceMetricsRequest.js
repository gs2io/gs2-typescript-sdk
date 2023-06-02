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
var GetKeyNamespaceMetricsRequest = /** @class */ (function () {
    function GetKeyNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetKeyNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetKeyNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetKeyNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetKeyNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetKeyNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetKeyNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetKeyNamespaceMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetKeyNamespaceMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetKeyNamespaceMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetKeyNamespaceMetricsRequest.fromDict = function (data) {
        return new GetKeyNamespaceMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetKeyNamespaceMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetKeyNamespaceMetricsRequest;
}());
exports.default = GetKeyNamespaceMetricsRequest;
//# sourceMappingURL=GetKeyNamespaceMetricsRequest.js.map