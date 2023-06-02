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
var DescribeLotteryLotteryMetricsRequest = /** @class */ (function () {
    function DescribeLotteryLotteryMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeLotteryLotteryMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLotteryLotteryMetricsRequest.fromDict = function (data) {
        return new DescribeLotteryLotteryMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeLotteryLotteryMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeLotteryLotteryMetricsRequest;
}());
exports.default = DescribeLotteryLotteryMetricsRequest;
//# sourceMappingURL=DescribeLotteryLotteryMetricsRequest.js.map