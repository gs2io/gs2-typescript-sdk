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
import * as Gs2Matchmaking from '../model';
var DoMatchmakingByUserIdRequest = /** @class */ (function () {
    function DoMatchmakingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.player = null;
        this.matchmakingContextToken = null;
    }
    DoMatchmakingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoMatchmakingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoMatchmakingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoMatchmakingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DoMatchmakingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.getPlayer = function () {
        return this.player;
    };
    DoMatchmakingByUserIdRequest.prototype.setPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withPlayer = function (player) {
        this.player = player;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoMatchmakingByUserIdRequest.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByUserIdRequest.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByUserIdRequest.fromDict = function (data) {
        return new DoMatchmakingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    };
    DoMatchmakingByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "player": (_a = this.getPlayer()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    };
    return DoMatchmakingByUserIdRequest;
}());
export default DoMatchmakingByUserIdRequest;
//# sourceMappingURL=DoMatchmakingByUserIdRequest.js.map