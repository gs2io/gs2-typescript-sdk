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
var GetPrizeLimitRequest = /** @class */ (function () {
    function GetPrizeLimitRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.prizeId = null;
    }
    GetPrizeLimitRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPrizeLimitRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeLimitRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPrizeLimitRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPrizeLimitRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeLimitRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPrizeLimitRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPrizeLimitRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeLimitRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPrizeLimitRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    GetPrizeLimitRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeLimitRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    GetPrizeLimitRequest.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    GetPrizeLimitRequest.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    GetPrizeLimitRequest.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    GetPrizeLimitRequest.fromDict = function (data) {
        return new GetPrizeLimitRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withPrizeId(data["prizeId"]);
    };
    GetPrizeLimitRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "prizeId": this.getPrizeId(),
        };
    };
    return GetPrizeLimitRequest;
}());
exports.default = GetPrizeLimitRequest;
//# sourceMappingURL=GetPrizeLimitRequest.js.map