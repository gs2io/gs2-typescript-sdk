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
var ResetPrizeLimitRequest = /** @class */ (function () {
    function ResetPrizeLimitRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.prizeId = null;
    }
    ResetPrizeLimitRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ResetPrizeLimitRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetPrizeLimitRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetPrizeLimitRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ResetPrizeLimitRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetPrizeLimitRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetPrizeLimitRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ResetPrizeLimitRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetPrizeLimitRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetPrizeLimitRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    ResetPrizeLimitRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    ResetPrizeLimitRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    ResetPrizeLimitRequest.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    ResetPrizeLimitRequest.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    ResetPrizeLimitRequest.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    ResetPrizeLimitRequest.fromDict = function (data) {
        return new ResetPrizeLimitRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withPrizeId(data["prizeId"]);
    };
    ResetPrizeLimitRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "prizeId": this.getPrizeId(),
        };
    };
    return ResetPrizeLimitRequest;
}());
exports.default = ResetPrizeLimitRequest;
//# sourceMappingURL=ResetPrizeLimitRequest.js.map