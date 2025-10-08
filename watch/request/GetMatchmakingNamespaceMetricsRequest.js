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
var GetMatchmakingNamespaceMetricsRequest = /** @class */ (function () {
    function GetMatchmakingNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetMatchmakingNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMatchmakingNamespaceMetricsRequest.fromDict = function (data) {
        return new GetMatchmakingNamespaceMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetMatchmakingNamespaceMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetMatchmakingNamespaceMetricsRequest;
}());
exports.default = GetMatchmakingNamespaceMetricsRequest;
//# sourceMappingURL=GetMatchmakingNamespaceMetricsRequest.js.map