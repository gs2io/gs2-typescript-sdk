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
var DescribeScoresRequest = /** @class */ (function () {
    function DescribeScoresRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.scorerUserId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeScoresRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeScoresRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScoresRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScoresRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeScoresRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScoresRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScoresRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeScoresRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScoresRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScoresRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DescribeScoresRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeScoresRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DescribeScoresRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeScoresRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeScoresRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeScoresRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    DescribeScoresRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    DescribeScoresRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    DescribeScoresRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeScoresRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScoresRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScoresRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeScoresRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScoresRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScoresRequest.fromDict = function (data) {
        return new DescribeScoresRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withScorerUserId(data["scorerUserId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeScoresRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "scorerUserId": this.getScorerUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeScoresRequest;
}());
export default DescribeScoresRequest;
//# sourceMappingURL=DescribeScoresRequest.js.map