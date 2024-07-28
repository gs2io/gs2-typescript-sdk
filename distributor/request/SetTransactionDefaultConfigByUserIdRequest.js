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
var SetTransactionDefaultConfigByUserIdRequest = /** @class */ (function () {
    function SetTransactionDefaultConfigByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetTransactionDefaultConfigByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetTransactionDefaultConfigByUserIdRequest.fromDict = function (data) {
        return new SetTransactionDefaultConfigByUserIdRequest()
            .withUserId(data["userId"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Distributor.Config.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetTransactionDefaultConfigByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetTransactionDefaultConfigByUserIdRequest;
}());
exports.default = SetTransactionDefaultConfigByUserIdRequest;
//# sourceMappingURL=SetTransactionDefaultConfigByUserIdRequest.js.map