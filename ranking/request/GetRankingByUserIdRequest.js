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
var GetRankingByUserIdRequest = /** @class */ (function () {
    function GetRankingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.scorerUserId = null;
        this.uniqueId = null;
        this.additionalScopeName = null;
        this.timeOffsetToken = null;
    }
    GetRankingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRankingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRankingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRankingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetRankingByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetRankingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetRankingByUserIdRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getUniqueId = function () {
        return this.uniqueId;
    };
    GetRankingByUserIdRequest.prototype.setUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getAdditionalScopeName = function () {
        return this.additionalScopeName;
    };
    GetRankingByUserIdRequest.prototype.setAdditionalScopeName = function (additionalScopeName) {
        this.additionalScopeName = additionalScopeName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withAdditionalScopeName = function (additionalScopeName) {
        this.additionalScopeName = additionalScopeName;
        return this;
    };
    GetRankingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetRankingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetRankingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetRankingByUserIdRequest.fromDict = function (data) {
        return new GetRankingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withScorerUserId(data["scorerUserId"])
            .withUniqueId(data["uniqueId"])
            .withAdditionalScopeName(data["additionalScopeName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetRankingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "scorerUserId": this.getScorerUserId(),
            "uniqueId": this.getUniqueId(),
            "additionalScopeName": this.getAdditionalScopeName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetRankingByUserIdRequest;
}());
exports.default = GetRankingByUserIdRequest;
//# sourceMappingURL=GetRankingByUserIdRequest.js.map