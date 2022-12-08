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
var ExchangeRequest = /** @class */ (function () {
    function ExchangeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.accessToken = null;
        this.count = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ExchangeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExchangeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExchangeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExchangeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExchangeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExchangeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExchangeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExchangeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ExchangeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ExchangeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ExchangeRequest.prototype.getCount = function () {
        return this.count;
    };
    ExchangeRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRequest.prototype.getConfig = function () {
        return this.config;
    };
    ExchangeRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ExchangeRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ExchangeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ExchangeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExchangeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExchangeRequest.fromDict = function (data) {
        return new ExchangeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withAccessToken(data["accessToken"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    ExchangeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "accessToken": this.getAccessToken(),
            "count": this.getCount(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExchangeRequest;
}());
exports.default = ExchangeRequest;
//# sourceMappingURL=ExchangeRequest.js.map