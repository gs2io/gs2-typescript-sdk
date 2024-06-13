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
var DescribeSeasonModelMastersRequest = /** @class */ (function () {
    function DescribeSeasonModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSeasonModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSeasonModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSeasonModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSeasonModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSeasonModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSeasonModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSeasonModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSeasonModelMastersRequest.fromDict = function (data) {
        return new DescribeSeasonModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSeasonModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSeasonModelMastersRequest;
}());
exports.default = DescribeSeasonModelMastersRequest;
//# sourceMappingURL=DescribeSeasonModelMastersRequest.js.map