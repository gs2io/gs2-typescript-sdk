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
var DescribeRankingssByUserIdRequest = /** @class */ (function () {
    function DescribeRankingssByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.startIndex = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRankingssByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRankingssByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRankingssByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRankingssByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeRankingssByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeRankingssByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getStartIndex = function () {
        return this.startIndex;
    };
    DescribeRankingssByUserIdRequest.prototype.setStartIndex = function (startIndex) {
        this.startIndex = startIndex;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withStartIndex = function (startIndex) {
        this.startIndex = startIndex;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRankingssByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRankingssByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRankingssByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRankingssByUserIdRequest.fromDict = function (data) {
        return new DescribeRankingssByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withStartIndex(data["startIndex"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRankingssByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "startIndex": this.getStartIndex(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRankingssByUserIdRequest;
}());
exports.default = DescribeRankingssByUserIdRequest;
//# sourceMappingURL=DescribeRankingssByUserIdRequest.js.map