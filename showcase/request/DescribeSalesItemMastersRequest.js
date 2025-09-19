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
var DescribeSalesItemMastersRequest = /** @class */ (function () {
    function DescribeSalesItemMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSalesItemMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSalesItemMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSalesItemMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSalesItemMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeSalesItemMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSalesItemMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSalesItemMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSalesItemMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSalesItemMastersRequest.fromDict = function (data) {
        return new DescribeSalesItemMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSalesItemMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSalesItemMastersRequest;
}());
exports.default = DescribeSalesItemMastersRequest;
//# sourceMappingURL=DescribeSalesItemMastersRequest.js.map