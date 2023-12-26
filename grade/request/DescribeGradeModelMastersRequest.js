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
var DescribeGradeModelMastersRequest = /** @class */ (function () {
    function DescribeGradeModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGradeModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGradeModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGradeModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGradeModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGradeModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGradeModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGradeModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGradeModelMastersRequest.fromDict = function (data) {
        return new DescribeGradeModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGradeModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGradeModelMastersRequest;
}());
exports.default = DescribeGradeModelMastersRequest;
//# sourceMappingURL=DescribeGradeModelMastersRequest.js.map