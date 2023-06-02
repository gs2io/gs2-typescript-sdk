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
var GetExchangeRateModelMetricsRequest = /** @class */ (function () {
    function GetExchangeRateModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
    }
    GetExchangeRateModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetExchangeRateModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetExchangeRateModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetExchangeRateModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetExchangeRateModelMetricsRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetExchangeRateModelMetricsRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetExchangeRateModelMetricsRequest.fromDict = function (data) {
        return new GetExchangeRateModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"]);
    };
    GetExchangeRateModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
        };
    };
    return GetExchangeRateModelMetricsRequest;
}());
exports.default = GetExchangeRateModelMetricsRequest;
//# sourceMappingURL=GetExchangeRateModelMetricsRequest.js.map