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
var Gs2Enhance = tslib_1.__importStar(require("../model"));
var EndRequest = /** @class */ (function () {
    function EndRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    EndRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EndRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EndRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EndRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    EndRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EndRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    EndRequest.prototype.getConfig = function () {
        return this.config;
    };
    EndRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    EndRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    EndRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EndRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndRequest.fromDict = function (data) {
        return new EndRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : null);
    };
    EndRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return EndRequest;
}());
exports.default = EndRequest;
//# sourceMappingURL=EndRequest.js.map