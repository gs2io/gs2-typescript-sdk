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
var Gs2Lottery = tslib_1.__importStar(require("../model"));
var DrawWithRandomSeedByUserIdRequest = /** @class */ (function () {
    function DrawWithRandomSeedByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.userId = null;
        this.randomSeed = null;
        this.count = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DrawWithRandomSeedByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getRandomSeed = function () {
        return this.randomSeed;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DrawWithRandomSeedByUserIdRequest.fromDict = function (data) {
        return new DrawWithRandomSeedByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withUserId(data["userId"])
            .withRandomSeed(data["randomSeed"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Lottery.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DrawWithRandomSeedByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "userId": this.getUserId(),
            "randomSeed": this.getRandomSeed(),
            "count": this.getCount(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DrawWithRandomSeedByUserIdRequest;
}());
exports.default = DrawWithRandomSeedByUserIdRequest;
//# sourceMappingURL=DrawWithRandomSeedByUserIdRequest.js.map