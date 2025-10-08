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
var DescribeAreaModelMastersRequest = /** @class */ (function () {
    function DescribeAreaModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeAreaModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAreaModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAreaModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeAreaModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeAreaModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeAreaModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAreaModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAreaModelMastersRequest.fromDict = function (data) {
        return new DescribeAreaModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeAreaModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeAreaModelMastersRequest;
}());
exports.default = DescribeAreaModelMastersRequest;
//# sourceMappingURL=DescribeAreaModelMastersRequest.js.map