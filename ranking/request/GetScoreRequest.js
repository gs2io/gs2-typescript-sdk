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
var GetScoreRequest = /** @class */ (function () {
    function GetScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.accessToken = null;
        this.scorerUserId = null;
        this.uniqueId = null;
    }
    GetScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScoreRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetScoreRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetScoreRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetScoreRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetScoreRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetScoreRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetScoreRequest.prototype.getUniqueId = function () {
        return this.uniqueId;
    };
    GetScoreRequest.prototype.setUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetScoreRequest.prototype.withUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    GetScoreRequest.fromDict = function (data) {
        return new GetScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withAccessToken(data["accessToken"])
            .withScorerUserId(data["scorerUserId"])
            .withUniqueId(data["uniqueId"]);
    };
    GetScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "accessToken": this.getAccessToken(),
            "scorerUserId": this.getScorerUserId(),
            "uniqueId": this.getUniqueId(),
        };
    };
    return GetScoreRequest;
}());
exports.default = GetScoreRequest;
//# sourceMappingURL=GetScoreRequest.js.map