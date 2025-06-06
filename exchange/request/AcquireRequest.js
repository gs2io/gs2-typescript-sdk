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
var AcquireRequest = /** @class */ (function () {
    function AcquireRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.awaitName = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    AcquireRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AcquireRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcquireRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcquireRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    AcquireRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireRequest.fromDict = function (data) {
        return new AcquireRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAwaitName(data["awaitName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : null);
    };
    AcquireRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "awaitName": this.getAwaitName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return AcquireRequest;
}());
exports.default = AcquireRequest;
//# sourceMappingURL=AcquireRequest.js.map