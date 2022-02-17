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
var DescribeProbabilitiesByUserIdRequest = /** @class */ (function () {
    function DescribeProbabilitiesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.userId = null;
    }
    DescribeProbabilitiesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeProbabilitiesByUserIdRequest.fromDict = function (data) {
        return new DescribeProbabilitiesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withUserId(data["userId"]);
    };
    DescribeProbabilitiesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "userId": this.getUserId(),
        };
    };
    return DescribeProbabilitiesByUserIdRequest;
}());
exports.default = DescribeProbabilitiesByUserIdRequest;
//# sourceMappingURL=DescribeProbabilitiesByUserIdRequest.js.map