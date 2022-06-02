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
var EndByUserIdRequest = /** @class */ (function () {
    function EndByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.progressName = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    EndByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EndByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EndByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EndByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EndByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EndByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EndByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EndByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EndByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    EndByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    EndByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    EndByUserIdRequest.prototype.getProgressName = function () {
        return this.progressName;
    };
    EndByUserIdRequest.prototype.setProgressName = function (progressName) {
        this.progressName = progressName;
        return this;
    };
    EndByUserIdRequest.prototype.withProgressName = function (progressName) {
        this.progressName = progressName;
        return this;
    };
    EndByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    EndByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    EndByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EndByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EndByUserIdRequest.fromDict = function (data) {
        return new EndByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withProgressName(data["progressName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : []);
    };
    EndByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "progressName": this.getProgressName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return EndByUserIdRequest;
}());
exports.default = EndByUserIdRequest;
//# sourceMappingURL=EndByUserIdRequest.js.map