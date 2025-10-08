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
var PredictionRequest = /** @class */ (function () {
    function PredictionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.accessToken = null;
        this.randomSeed = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    PredictionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PredictionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PredictionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PredictionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PredictionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PredictionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PredictionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PredictionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PredictionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PredictionRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    PredictionRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    PredictionRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    PredictionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PredictionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PredictionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PredictionRequest.prototype.getRandomSeed = function () {
        return this.randomSeed;
    };
    PredictionRequest.prototype.setRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    PredictionRequest.prototype.withRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    PredictionRequest.prototype.getCount = function () {
        return this.count;
    };
    PredictionRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    PredictionRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    PredictionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PredictionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PredictionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PredictionRequest.fromDict = function (data) {
        return new PredictionRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withAccessToken(data["accessToken"])
            .withRandomSeed(data["randomSeed"])
            .withCount(data["count"]);
    };
    PredictionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "accessToken": this.getAccessToken(),
            "randomSeed": this.getRandomSeed(),
            "count": this.getCount(),
        };
    };
    return PredictionRequest;
}());
exports.default = PredictionRequest;
//# sourceMappingURL=PredictionRequest.js.map