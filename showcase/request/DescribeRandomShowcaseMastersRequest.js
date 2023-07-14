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
var DescribeRandomShowcaseMastersRequest = /** @class */ (function () {
    function DescribeRandomShowcaseMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRandomShowcaseMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRandomShowcaseMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRandomShowcaseMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRandomShowcaseMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRandomShowcaseMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRandomShowcaseMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRandomShowcaseMastersRequest.fromDict = function (data) {
        return new DescribeRandomShowcaseMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRandomShowcaseMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRandomShowcaseMastersRequest;
}());
exports.default = DescribeRandomShowcaseMastersRequest;
//# sourceMappingURL=DescribeRandomShowcaseMastersRequest.js.map