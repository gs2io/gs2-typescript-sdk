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
var MissedReceiveRequest = /** @class */ (function () {
    function MissedReceiveRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.accessToken = null;
        this.stepNumber = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    MissedReceiveRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MissedReceiveRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MissedReceiveRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MissedReceiveRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MissedReceiveRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MissedReceiveRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MissedReceiveRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MissedReceiveRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MissedReceiveRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MissedReceiveRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    MissedReceiveRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MissedReceiveRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MissedReceiveRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    MissedReceiveRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MissedReceiveRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MissedReceiveRequest.prototype.getStepNumber = function () {
        return this.stepNumber;
    };
    MissedReceiveRequest.prototype.setStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MissedReceiveRequest.prototype.withStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MissedReceiveRequest.prototype.getConfig = function () {
        return this.config;
    };
    MissedReceiveRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    MissedReceiveRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    MissedReceiveRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MissedReceiveRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MissedReceiveRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MissedReceiveRequest.fromDict = function (data) {
        return new MissedReceiveRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withAccessToken(data["accessToken"])
            .withStepNumber(data["stepNumber"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2LoginReward.Config.fromDict(item);
            }) : []);
    };
    MissedReceiveRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "accessToken": this.getAccessToken(),
            "stepNumber": this.getStepNumber(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return MissedReceiveRequest;
}());
exports.default = MissedReceiveRequest;
//# sourceMappingURL=MissedReceiveRequest.js.map