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
var DescribeNearRankingsRequest = /** @class */ (function () {
    function DescribeNearRankingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.score = null;
    }
    DescribeNearRankingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeNearRankingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeNearRankingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeNearRankingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeNearRankingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeNearRankingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeNearRankingsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeNearRankingsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeNearRankingsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeNearRankingsRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeNearRankingsRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeNearRankingsRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeNearRankingsRequest.prototype.getScore = function () {
        return this.score;
    };
    DescribeNearRankingsRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    DescribeNearRankingsRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    DescribeNearRankingsRequest.fromDict = function (data) {
        return new DescribeNearRankingsRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withScore(data["score"]);
    };
    DescribeNearRankingsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "score": this.getScore(),
        };
    };
    return DescribeNearRankingsRequest;
}());
exports.default = DescribeNearRankingsRequest;
//# sourceMappingURL=DescribeNearRankingsRequest.js.map