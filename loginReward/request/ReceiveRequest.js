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
var ReceiveRequest = /** @class */ (function () {
    function ReceiveRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.accessToken = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReceiveRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    ReceiveRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    ReceiveRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    ReceiveRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReceiveRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveRequest.fromDict = function (data) {
        return new ReceiveRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withAccessToken(data["accessToken"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2LoginReward.Config.fromDict(item);
            }) : null);
    };
    ReceiveRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "accessToken": this.getAccessToken(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ReceiveRequest;
}());
exports.default = ReceiveRequest;
//# sourceMappingURL=ReceiveRequest.js.map