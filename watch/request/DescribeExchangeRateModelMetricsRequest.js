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
var DescribeExchangeRateModelMetricsRequest = /** @class */ (function () {
    function DescribeExchangeRateModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeExchangeRateModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeExchangeRateModelMetricsRequest.fromDict = function (data) {
        return new DescribeExchangeRateModelMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeExchangeRateModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeExchangeRateModelMetricsRequest;
}());
exports.default = DescribeExchangeRateModelMetricsRequest;
//# sourceMappingURL=DescribeExchangeRateModelMetricsRequest.js.map