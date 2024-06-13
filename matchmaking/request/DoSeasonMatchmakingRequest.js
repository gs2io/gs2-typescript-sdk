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
var DoSeasonMatchmakingRequest = /** @class */ (function () {
    function DoSeasonMatchmakingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.accessToken = null;
        this.matchmakingContextToken = null;
        this.duplicationAvoider = null;
    }
    DoSeasonMatchmakingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoSeasonMatchmakingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoSeasonMatchmakingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoSeasonMatchmakingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DoSeasonMatchmakingRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DoSeasonMatchmakingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoSeasonMatchmakingRequest.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DoSeasonMatchmakingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoSeasonMatchmakingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoSeasonMatchmakingRequest.fromDict = function (data) {
        return new DoSeasonMatchmakingRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withAccessToken(data["accessToken"])
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    };
    DoSeasonMatchmakingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "accessToken": this.getAccessToken(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    };
    return DoSeasonMatchmakingRequest;
}());
exports.default = DoSeasonMatchmakingRequest;
//# sourceMappingURL=DoSeasonMatchmakingRequest.js.map