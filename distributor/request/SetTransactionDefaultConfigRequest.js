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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var SetTransactionDefaultConfigRequest = /** @class */ (function () {
    function SetTransactionDefaultConfigRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accessToken = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    SetTransactionDefaultConfigRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetTransactionDefaultConfigRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetTransactionDefaultConfigRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetTransactionDefaultConfigRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.getConfig = function () {
        return this.config;
    };
    SetTransactionDefaultConfigRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetTransactionDefaultConfigRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetTransactionDefaultConfigRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetTransactionDefaultConfigRequest.fromDict = function (data) {
        return new SetTransactionDefaultConfigRequest()
            .withAccessToken(data["accessToken"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Distributor.Config.fromDict(item);
            }) : null);
    };
    SetTransactionDefaultConfigRequest.prototype.toDict = function () {
        return {
            "accessToken": this.getAccessToken(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SetTransactionDefaultConfigRequest;
}());
exports.default = SetTransactionDefaultConfigRequest;
//# sourceMappingURL=SetTransactionDefaultConfigRequest.js.map