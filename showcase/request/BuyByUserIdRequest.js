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
var BuyByUserIdRequest = /** @class */ (function () {
    function BuyByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemId = null;
        this.userId = null;
        this.quantity = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    BuyByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BuyByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BuyByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BuyByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BuyByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BuyByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BuyByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BuyByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BuyByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BuyByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    BuyByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    BuyByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    BuyByUserIdRequest.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    BuyByUserIdRequest.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    BuyByUserIdRequest.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    BuyByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    BuyByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BuyByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BuyByUserIdRequest.prototype.getQuantity = function () {
        return this.quantity;
    };
    BuyByUserIdRequest.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    BuyByUserIdRequest.prototype.withQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    BuyByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    BuyByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BuyByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BuyByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BuyByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BuyByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BuyByUserIdRequest.fromDict = function (data) {
        return new BuyByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemId(data["displayItemId"])
            .withUserId(data["userId"])
            .withQuantity(data["quantity"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Showcase.Config.fromDict(item);
            }) : []);
    };
    BuyByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemId": this.getDisplayItemId(),
            "userId": this.getUserId(),
            "quantity": this.getQuantity(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BuyByUserIdRequest;
}());
exports.default = BuyByUserIdRequest;
//# sourceMappingURL=BuyByUserIdRequest.js.map