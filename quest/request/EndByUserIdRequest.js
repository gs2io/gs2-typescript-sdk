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
var Gs2Quest = tslib_1.__importStar(require("../model"));
var EndByUserIdRequest = /** @class */ (function () {
    function EndByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rewards = null;
        this.isComplete = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    EndByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EndByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EndByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EndByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EndByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.getRewards = function () {
        return this.rewards;
    };
    EndByUserIdRequest.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    EndByUserIdRequest.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    EndByUserIdRequest.prototype.getIsComplete = function () {
        return this.isComplete;
    };
    EndByUserIdRequest.prototype.setIsComplete = function (isComplete) {
        this.isComplete = isComplete;
        return this;
    };
    EndByUserIdRequest.prototype.withIsComplete = function (isComplete) {
        this.isComplete = isComplete;
        return this;
    };
    EndByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    EndByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    EndByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EndByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EndByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EndByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndByUserIdRequest.fromDict = function (data) {
        return new EndByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Gs2Quest.Reward.fromDict(item);
            }) : null)
            .withIsComplete(data["isComplete"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Quest.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    EndByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "isComplete": this.getIsComplete(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return EndByUserIdRequest;
}());
exports.default = EndByUserIdRequest;
//# sourceMappingURL=EndByUserIdRequest.js.map