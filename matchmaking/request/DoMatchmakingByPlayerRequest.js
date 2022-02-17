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
var Gs2Matchmaking = (0, tslib_1.__importStar)(require("../model"));
var DoMatchmakingByPlayerRequest = /** @class */ (function () {
    function DoMatchmakingByPlayerRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.player = null;
        this.matchmakingContextToken = null;
    }
    DoMatchmakingByPlayerRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoMatchmakingByPlayerRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoMatchmakingByPlayerRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoMatchmakingByPlayerRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.getPlayer = function () {
        return this.player;
    };
    DoMatchmakingByPlayerRequest.prototype.setPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.withPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoMatchmakingByPlayerRequest.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByPlayerRequest.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByPlayerRequest.fromDict = function (data) {
        return new DoMatchmakingByPlayerRequest()
            .withNamespaceName(data["namespaceName"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    };
    DoMatchmakingByPlayerRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "player": (_a = this.getPlayer()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    };
    return DoMatchmakingByPlayerRequest;
}());
exports.default = DoMatchmakingByPlayerRequest;
//# sourceMappingURL=DoMatchmakingByPlayerRequest.js.map