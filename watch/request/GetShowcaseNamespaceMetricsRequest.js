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
var GetShowcaseNamespaceMetricsRequest = /** @class */ (function () {
    function GetShowcaseNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetShowcaseNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetShowcaseNamespaceMetricsRequest.fromDict = function (data) {
        return new GetShowcaseNamespaceMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetShowcaseNamespaceMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetShowcaseNamespaceMetricsRequest;
}());
exports.default = GetShowcaseNamespaceMetricsRequest;
//# sourceMappingURL=GetShowcaseNamespaceMetricsRequest.js.map