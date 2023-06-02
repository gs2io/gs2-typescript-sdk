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
var GetLotteryLotteryMetricsRequest = /** @class */ (function () {
    function GetLotteryLotteryMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
    }
    GetLotteryLotteryMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLotteryLotteryMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLotteryLotteryMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLotteryLotteryMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    GetLotteryLotteryMetricsRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryLotteryMetricsRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    GetLotteryLotteryMetricsRequest.fromDict = function (data) {
        return new GetLotteryLotteryMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"]);
    };
    GetLotteryLotteryMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
        };
    };
    return GetLotteryLotteryMetricsRequest;
}());
exports.default = GetLotteryLotteryMetricsRequest;
//# sourceMappingURL=GetLotteryLotteryMetricsRequest.js.map