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
var VoteMultipleRequest = /** @class */ (function () {
    function VoteMultipleRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.signedBallots = null;
        this.gameResults = null;
        this.keyId = null;
    }
    VoteMultipleRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VoteMultipleRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VoteMultipleRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VoteMultipleRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VoteMultipleRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VoteMultipleRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VoteMultipleRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VoteMultipleRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VoteMultipleRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VoteMultipleRequest.prototype.getSignedBallots = function () {
        return this.signedBallots;
    };
    VoteMultipleRequest.prototype.setSignedBallots = function (signedBallots) {
        this.signedBallots = signedBallots;
        return this;
    };
    VoteMultipleRequest.prototype.withSignedBallots = function (signedBallots) {
        this.signedBallots = signedBallots;
        return this;
    };
    VoteMultipleRequest.prototype.getGameResults = function () {
        return this.gameResults;
    };
    VoteMultipleRequest.prototype.setGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    VoteMultipleRequest.prototype.withGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    VoteMultipleRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VoteMultipleRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VoteMultipleRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VoteMultipleRequest.fromDict = function (data) {
        return new VoteMultipleRequest()
            .withNamespaceName(data["namespaceName"])
            .withSignedBallots(data.signedBallots ?
            data.signedBallots.map(function (item) {
                return Gs2Matchmaking.SignedBallot.fromDict(item);
            }) : null)
            .withGameResults(data.gameResults ?
            data.gameResults.map(function (item) {
                return Gs2Matchmaking.GameResult.fromDict(item);
            }) : null)
            .withKeyId(data["keyId"]);
    };
    VoteMultipleRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "signedBallots": this.getSignedBallots() ?
                this.getSignedBallots().map(function (item) {
                    return item.toDict();
                }) : null,
            "gameResults": this.getGameResults() ?
                this.getGameResults().map(function (item) {
                    return item.toDict();
                }) : null,
            "keyId": this.getKeyId(),
        };
    };
    return VoteMultipleRequest;
}());
exports.default = VoteMultipleRequest;
//# sourceMappingURL=VoteMultipleRequest.js.map