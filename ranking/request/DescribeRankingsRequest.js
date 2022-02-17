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
var DescribeRankingsRequest = /** @class */ (function () {
    function DescribeRankingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.startIndex = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRankingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRankingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRankingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRankingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRankingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRankingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRankingsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRankingsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRankingsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRankingsRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeRankingsRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeRankingsRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeRankingsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeRankingsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRankingsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRankingsRequest.prototype.getStartIndex = function () {
        return this.startIndex;
    };
    DescribeRankingsRequest.prototype.setStartIndex = function (startIndex) {
        this.startIndex = startIndex;
        return this;
    };
    DescribeRankingsRequest.prototype.withStartIndex = function (startIndex) {
        this.startIndex = startIndex;
        return this;
    };
    DescribeRankingsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRankingsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRankingsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRankingsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRankingsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRankingsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRankingsRequest.fromDict = function (data) {
        return new DescribeRankingsRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withStartIndex(data["startIndex"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRankingsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "startIndex": this.getStartIndex(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRankingsRequest;
}());
exports.default = DescribeRankingsRequest;
//# sourceMappingURL=DescribeRankingsRequest.js.map