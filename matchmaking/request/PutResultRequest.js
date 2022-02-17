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
var PutResultRequest = /** @class */ (function () {
    function PutResultRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.ratingName = null;
        this.gameResults = null;
    }
    PutResultRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutResultRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutResultRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutResultRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutResultRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutResultRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutResultRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutResultRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutResultRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutResultRequest.prototype.getRatingName = function () {
        return this.ratingName;
    };
    PutResultRequest.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    PutResultRequest.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    PutResultRequest.prototype.getGameResults = function () {
        return this.gameResults;
    };
    PutResultRequest.prototype.setGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    PutResultRequest.prototype.withGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    PutResultRequest.fromDict = function (data) {
        return new PutResultRequest()
            .withNamespaceName(data["namespaceName"])
            .withRatingName(data["ratingName"])
            .withGameResults(data.gameResults ?
            data.gameResults.map(function (item) {
                return Gs2Matchmaking.GameResult.fromDict(item);
            }) : []);
    };
    PutResultRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "gameResults": this.getGameResults() ?
                this.getGameResults().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return PutResultRequest;
}());
exports.default = PutResultRequest;
//# sourceMappingURL=PutResultRequest.js.map