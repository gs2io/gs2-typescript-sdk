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
var DescribeBalanceParameterModelMastersRequest = /** @class */ (function () {
    function DescribeBalanceParameterModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBalanceParameterModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterModelMastersRequest.fromDict = function (data) {
        return new DescribeBalanceParameterModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBalanceParameterModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBalanceParameterModelMastersRequest;
}());
exports.default = DescribeBalanceParameterModelMastersRequest;
//# sourceMappingURL=DescribeBalanceParameterModelMastersRequest.js.map