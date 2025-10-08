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
var tslib_1 = require("tslib");
var Gs2Matchmaking = tslib_1.__importStar(require("../model"));
var DoMatchmakingRequest = /** @class */ (function () {
    function DoMatchmakingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.player = null;
        this.matchmakingContextToken = null;
        this.duplicationAvoider = null;
    }
    DoMatchmakingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoMatchmakingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoMatchmakingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoMatchmakingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DoMatchmakingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoMatchmakingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoMatchmakingRequest.prototype.getPlayer = function () {
        return this.player;
    };
    DoMatchmakingRequest.prototype.setPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingRequest.prototype.withPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingRequest.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoMatchmakingRequest.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingRequest.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DoMatchmakingRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoMatchmakingRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoMatchmakingRequest.fromDict = function (data) {
        return new DoMatchmakingRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    };
    DoMatchmakingRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "player": (_a = this.getPlayer()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    };
    return DoMatchmakingRequest;
}());
exports.default = DoMatchmakingRequest;
//# sourceMappingURL=DoMatchmakingRequest.js.map