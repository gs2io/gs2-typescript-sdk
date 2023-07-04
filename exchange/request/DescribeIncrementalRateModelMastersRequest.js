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
var DescribeIncrementalRateModelMastersRequest = /** @class */ (function () {
    function DescribeIncrementalRateModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeIncrementalRateModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIncrementalRateModelMastersRequest.fromDict = function (data) {
        return new DescribeIncrementalRateModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeIncrementalRateModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeIncrementalRateModelMastersRequest;
}());
exports.default = DescribeIncrementalRateModelMastersRequest;
//# sourceMappingURL=DescribeIncrementalRateModelMastersRequest.js.map