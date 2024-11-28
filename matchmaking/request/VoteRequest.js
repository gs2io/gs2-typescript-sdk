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
var VoteRequest = /** @class */ (function () {
    function VoteRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ballotBody = null;
        this.ballotSignature = null;
        this.gameResults = null;
        this.keyId = null;
    }
    VoteRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VoteRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VoteRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VoteRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VoteRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VoteRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VoteRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VoteRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VoteRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VoteRequest.prototype.getBallotBody = function () {
        return this.ballotBody;
    };
    VoteRequest.prototype.setBallotBody = function (ballotBody) {
        this.ballotBody = ballotBody;
        return this;
    };
    VoteRequest.prototype.withBallotBody = function (ballotBody) {
        this.ballotBody = ballotBody;
        return this;
    };
    VoteRequest.prototype.getBallotSignature = function () {
        return this.ballotSignature;
    };
    VoteRequest.prototype.setBallotSignature = function (ballotSignature) {
        this.ballotSignature = ballotSignature;
        return this;
    };
    VoteRequest.prototype.withBallotSignature = function (ballotSignature) {
        this.ballotSignature = ballotSignature;
        return this;
    };
    VoteRequest.prototype.getGameResults = function () {
        return this.gameResults;
    };
    VoteRequest.prototype.setGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    VoteRequest.prototype.withGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    VoteRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    VoteRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VoteRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    VoteRequest.fromDict = function (data) {
        return new VoteRequest()
            .withNamespaceName(data["namespaceName"])
            .withBallotBody(data["ballotBody"])
            .withBallotSignature(data["ballotSignature"])
            .withGameResults(data.gameResults ?
            data.gameResults.map(function (item) {
                return Gs2Matchmaking.GameResult.fromDict(item);
            }) : null)
            .withKeyId(data["keyId"]);
    };
    VoteRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ballotBody": this.getBallotBody(),
            "ballotSignature": this.getBallotSignature(),
            "gameResults": this.getGameResults() ?
                this.getGameResults().map(function (item) {
                    return item.toDict();
                }) : null,
            "keyId": this.getKeyId(),
        };
    };
    return VoteRequest;
}());
exports.default = VoteRequest;
//# sourceMappingURL=VoteRequest.js.map