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
var DescribeUnleashRateModelMastersRequest = /** @class */ (function () {
    function DescribeUnleashRateModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeUnleashRateModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeUnleashRateModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUnleashRateModelMastersRequest.fromDict = function (data) {
        return new DescribeUnleashRateModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeUnleashRateModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeUnleashRateModelMastersRequest;
}());
exports.default = DescribeUnleashRateModelMastersRequest;
//# sourceMappingURL=DescribeUnleashRateModelMastersRequest.js.map