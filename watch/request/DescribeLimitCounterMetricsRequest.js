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
var DescribeLimitCounterMetricsRequest = /** @class */ (function () {
    function DescribeLimitCounterMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
    }
    DescribeLimitCounterMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLimitCounterMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLimitCounterMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLimitCounterMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    DescribeLimitCounterMetricsRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DescribeLimitCounterMetricsRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DescribeLimitCounterMetricsRequest.fromDict = function (data) {
        return new DescribeLimitCounterMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"]);
    };
    DescribeLimitCounterMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
        };
    };
    return DescribeLimitCounterMetricsRequest;
}());
exports.default = DescribeLimitCounterMetricsRequest;
//# sourceMappingURL=DescribeLimitCounterMetricsRequest.js.map