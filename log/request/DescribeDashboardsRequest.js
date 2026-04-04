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
var DescribeDashboardsRequest = /** @class */ (function () {
    function DescribeDashboardsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDashboardsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDashboardsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDashboardsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDashboardsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDashboardsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDashboardsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDashboardsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDashboardsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDashboardsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDashboardsRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeDashboardsRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeDashboardsRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeDashboardsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDashboardsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDashboardsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDashboardsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDashboardsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDashboardsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDashboardsRequest.fromDict = function (data) {
        return new DescribeDashboardsRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDashboardsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDashboardsRequest;
}());
exports.default = DescribeDashboardsRequest;
//# sourceMappingURL=DescribeDashboardsRequest.js.map