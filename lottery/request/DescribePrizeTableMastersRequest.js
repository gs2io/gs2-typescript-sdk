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
var DescribePrizeTableMastersRequest = /** @class */ (function () {
    function DescribePrizeTableMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePrizeTableMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePrizeTableMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePrizeTableMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePrizeTableMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribePrizeTableMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePrizeTableMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePrizeTableMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePrizeTableMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePrizeTableMastersRequest.fromDict = function (data) {
        return new DescribePrizeTableMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePrizeTableMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePrizeTableMastersRequest;
}());
exports.default = DescribePrizeTableMastersRequest;
//# sourceMappingURL=DescribePrizeTableMastersRequest.js.map