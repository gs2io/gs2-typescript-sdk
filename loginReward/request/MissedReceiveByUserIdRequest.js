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
var Gs2LoginReward = tslib_1.__importStar(require("../model"));
var MissedReceiveByUserIdRequest = /** @class */ (function () {
    function MissedReceiveByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
        this.stepNumber = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    MissedReceiveByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MissedReceiveByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MissedReceiveByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MissedReceiveByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    MissedReceiveByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    MissedReceiveByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getStepNumber = function () {
        return this.stepNumber;
    };
    MissedReceiveByUserIdRequest.prototype.setStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    MissedReceiveByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    MissedReceiveByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MissedReceiveByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MissedReceiveByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MissedReceiveByUserIdRequest.fromDict = function (data) {
        return new MissedReceiveByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"])
            .withStepNumber(data["stepNumber"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2LoginReward.Config.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    MissedReceiveByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
            "stepNumber": this.getStepNumber(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return MissedReceiveByUserIdRequest;
}());
exports.default = MissedReceiveByUserIdRequest;
//# sourceMappingURL=MissedReceiveByUserIdRequest.js.map