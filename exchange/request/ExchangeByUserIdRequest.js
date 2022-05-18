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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var ExchangeByUserIdRequest = /** @class */ (function () {
    function ExchangeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.count = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ExchangeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExchangeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExchangeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExchangeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ExchangeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    ExchangeByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ExchangeByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ExchangeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ExchangeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExchangeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExchangeByUserIdRequest.fromDict = function (data) {
        return new ExchangeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    ExchangeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExchangeByUserIdRequest;
}());
exports.default = ExchangeByUserIdRequest;
//# sourceMappingURL=ExchangeByUserIdRequest.js.map