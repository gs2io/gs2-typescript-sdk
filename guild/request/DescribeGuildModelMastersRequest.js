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
var DescribeGuildModelMastersRequest = /** @class */ (function () {
    function DescribeGuildModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGuildModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGuildModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGuildModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGuildModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeGuildModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGuildModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGuildModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGuildModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGuildModelMastersRequest.fromDict = function (data) {
        return new DescribeGuildModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGuildModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGuildModelMastersRequest;
}());
exports.default = DescribeGuildModelMastersRequest;
//# sourceMappingURL=DescribeGuildModelMastersRequest.js.map