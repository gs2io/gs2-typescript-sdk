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
var DoSeasonMatchmakingByUserIdRequest = /** @class */ (function () {
    function DoSeasonMatchmakingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.userId = null;
        this.matchmakingContextToken = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DoSeasonMatchmakingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoSeasonMatchmakingByUserIdRequest.fromDict = function (data) {
        return new DoSeasonMatchmakingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withUserId(data["userId"])
            .withMatchmakingContextToken(data["matchmakingContextToken"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DoSeasonMatchmakingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "userId": this.getUserId(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DoSeasonMatchmakingByUserIdRequest;
}());
exports.default = DoSeasonMatchmakingByUserIdRequest;
//# sourceMappingURL=DoSeasonMatchmakingByUserIdRequest.js.map