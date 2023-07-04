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
var IncrementalExchangeByUserIdRequest = /** @class */ (function () {
    function IncrementalExchangeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.count = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    IncrementalExchangeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncrementalExchangeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncrementalExchangeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncrementalExchangeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    IncrementalExchangeByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IncrementalExchangeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    IncrementalExchangeByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    IncrementalExchangeByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncrementalExchangeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementalExchangeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementalExchangeByUserIdRequest.fromDict = function (data) {
        return new IncrementalExchangeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    IncrementalExchangeByUserIdRequest.prototype.toDict = function () {
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
    return IncrementalExchangeByUserIdRequest;
}());
exports.default = IncrementalExchangeByUserIdRequest;
//# sourceMappingURL=IncrementalExchangeByUserIdRequest.js.map