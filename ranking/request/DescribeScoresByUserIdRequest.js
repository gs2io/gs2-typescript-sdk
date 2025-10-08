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
var DescribeScoresByUserIdRequest = /** @class */ (function () {
    function DescribeScoresByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.scorerUserId = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeScoresByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeScoresByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeScoresByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeScoresByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeScoresByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeScoresByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    DescribeScoresByUserIdRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeScoresByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeScoresByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeScoresByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeScoresByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeScoresByUserIdRequest.fromDict = function (data) {
        return new DescribeScoresByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withScorerUserId(data["scorerUserId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeScoresByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "scorerUserId": this.getScorerUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeScoresByUserIdRequest;
}());
exports.default = DescribeScoresByUserIdRequest;
//# sourceMappingURL=DescribeScoresByUserIdRequest.js.map