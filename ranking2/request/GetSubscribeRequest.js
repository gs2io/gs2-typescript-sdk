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
var GetSubscribeRequest = /** @class */ (function () {
    function GetSubscribeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.targetUserId = null;
    }
    GetSubscribeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSubscribeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    GetSubscribeRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetSubscribeRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetSubscribeRequest.fromDict = function (data) {
        return new GetSubscribeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    GetSubscribeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return GetSubscribeRequest;
}());
exports.default = GetSubscribeRequest;
//# sourceMappingURL=GetSubscribeRequest.js.map