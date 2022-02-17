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
var GetScoreByUserIdRequest = /** @class */ (function () {
    function GetScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.scorerUserId = null;
        this.uniqueId = null;
    }
    GetScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetScoreByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetScoreByUserIdRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.getUniqueId = function () {
        return this.uniqueId;
    };
    GetScoreByUserIdRequest.prototype.setUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetScoreByUserIdRequest.prototype.withUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetScoreByUserIdRequest.fromDict = function (data) {
        return new GetScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withScorerUserId(data["scorerUserId"])
            .withUniqueId(data["uniqueId"]);
    };
    GetScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "scorerUserId": this.getScorerUserId(),
            "uniqueId": this.getUniqueId(),
        };
    };
    return GetScoreByUserIdRequest;
}());
export default GetScoreByUserIdRequest;
//# sourceMappingURL=GetScoreByUserIdRequest.js.map