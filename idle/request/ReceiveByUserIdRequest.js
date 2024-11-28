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
var Gs2Idle = tslib_1.__importStar(require("../model"));
var ReceiveByUserIdRequest = /** @class */ (function () {
    function ReceiveByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.categoryName = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ReceiveByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    ReceiveByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ReceiveByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveByUserIdRequest.fromDict = function (data) {
        return new ReceiveByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCategoryName(data["categoryName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Idle.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ReceiveByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "categoryName": this.getCategoryName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ReceiveByUserIdRequest;
}());
exports.default = ReceiveByUserIdRequest;
//# sourceMappingURL=ReceiveByUserIdRequest.js.map