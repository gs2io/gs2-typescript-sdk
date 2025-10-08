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
var DescribePrizeLimitsRequest = /** @class */ (function () {
    function DescribePrizeLimitsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePrizeLimitsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePrizeLimitsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePrizeLimitsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePrizeLimitsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    DescribePrizeLimitsRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePrizeLimitsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePrizeLimitsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePrizeLimitsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePrizeLimitsRequest.fromDict = function (data) {
        return new DescribePrizeLimitsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePrizeLimitsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePrizeLimitsRequest;
}());
exports.default = DescribePrizeLimitsRequest;
//# sourceMappingURL=DescribePrizeLimitsRequest.js.map