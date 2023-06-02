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
var GetLimitLimitModelMetricsRequest = /** @class */ (function () {
    function GetLimitLimitModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
    }
    GetLimitLimitModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLimitLimitModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLimitLimitModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLimitLimitModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    GetLimitLimitModelMetricsRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitLimitModelMetricsRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    GetLimitLimitModelMetricsRequest.fromDict = function (data) {
        return new GetLimitLimitModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"]);
    };
    GetLimitLimitModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
        };
    };
    return GetLimitLimitModelMetricsRequest;
}());
exports.default = GetLimitLimitModelMetricsRequest;
//# sourceMappingURL=GetLimitLimitModelMetricsRequest.js.map