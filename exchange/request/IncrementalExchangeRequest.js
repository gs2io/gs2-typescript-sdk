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
var IncrementalExchangeRequest = /** @class */ (function () {
    function IncrementalExchangeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.accessToken = null;
        this.count = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    IncrementalExchangeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncrementalExchangeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementalExchangeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementalExchangeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncrementalExchangeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementalExchangeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementalExchangeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncrementalExchangeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementalExchangeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementalExchangeRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    IncrementalExchangeRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    IncrementalExchangeRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    IncrementalExchangeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    IncrementalExchangeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IncrementalExchangeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IncrementalExchangeRequest.prototype.getCount = function () {
        return this.count;
    };
    IncrementalExchangeRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementalExchangeRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementalExchangeRequest.prototype.getConfig = function () {
        return this.config;
    };
    IncrementalExchangeRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    IncrementalExchangeRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    IncrementalExchangeRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncrementalExchangeRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementalExchangeRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementalExchangeRequest.fromDict = function (data) {
        return new IncrementalExchangeRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withAccessToken(data["accessToken"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    IncrementalExchangeRequest.prototype.toDict = function () {
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
    return IncrementalExchangeRequest;
}());
exports.default = IncrementalExchangeRequest;
//# sourceMappingURL=IncrementalExchangeRequest.js.map