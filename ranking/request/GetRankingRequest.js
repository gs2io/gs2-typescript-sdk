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
var GetRankingRequest = /** @class */ (function () {
    function GetRankingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.scorerUserId = null;
        this.uniqueId = null;
    }
    GetRankingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRankingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRankingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRankingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRankingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRankingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRankingRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetRankingRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetRankingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetRankingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRankingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetRankingRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetRankingRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetRankingRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetRankingRequest.prototype.getUniqueId = function () {
        return this.uniqueId;
    };
    GetRankingRequest.prototype.setUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetRankingRequest.prototype.withUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetRankingRequest.fromDict = function (data) {
        return new GetRankingRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withScorerUserId(data["scorerUserId"])
            .withUniqueId(data["uniqueId"]);
    };
    GetRankingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "scorerUserId": this.getScorerUserId(),
            "uniqueId": this.getUniqueId(),
        };
    };
    return GetRankingRequest;
}());
exports.default = GetRankingRequest;
//# sourceMappingURL=GetRankingRequest.js.map