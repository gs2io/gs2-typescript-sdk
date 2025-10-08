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
var SkipRequest = /** @class */ (function () {
    function SkipRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.awaitName = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    SkipRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SkipRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SkipRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SkipRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SkipRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SkipRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SkipRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SkipRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SkipRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SkipRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SkipRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SkipRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SkipRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    SkipRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    SkipRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    SkipRequest.prototype.getConfig = function () {
        return this.config;
    };
    SkipRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    SkipRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    SkipRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SkipRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SkipRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SkipRequest.fromDict = function (data) {
        return new SkipRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAwaitName(data["awaitName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : []);
    };
    SkipRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "awaitName": this.getAwaitName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return SkipRequest;
}());
exports.default = SkipRequest;
//# sourceMappingURL=SkipRequest.js.map