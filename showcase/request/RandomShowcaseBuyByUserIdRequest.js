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
var Gs2Showcase = tslib_1.__importStar(require("../model"));
var RandomShowcaseBuyByUserIdRequest = /** @class */ (function () {
    function RandomShowcaseBuyByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.userId = null;
        this.quantity = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RandomShowcaseBuyByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getQuantity = function () {
        return this.quantity;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RandomShowcaseBuyByUserIdRequest.fromDict = function (data) {
        return new RandomShowcaseBuyByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withUserId(data["userId"])
            .withQuantity(data["quantity"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Showcase.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RandomShowcaseBuyByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "userId": this.getUserId(),
            "quantity": this.getQuantity(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RandomShowcaseBuyByUserIdRequest;
}());
exports.default = RandomShowcaseBuyByUserIdRequest;
//# sourceMappingURL=RandomShowcaseBuyByUserIdRequest.js.map