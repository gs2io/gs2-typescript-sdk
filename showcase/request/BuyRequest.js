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
var BuyRequest = /** @class */ (function () {
    function BuyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemId = null;
        this.accessToken = null;
        this.quantity = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    BuyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BuyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BuyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BuyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BuyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BuyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BuyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BuyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BuyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BuyRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    BuyRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    BuyRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    BuyRequest.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    BuyRequest.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    BuyRequest.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    BuyRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    BuyRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BuyRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BuyRequest.prototype.getQuantity = function () {
        return this.quantity;
    };
    BuyRequest.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    BuyRequest.prototype.withQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    BuyRequest.prototype.getConfig = function () {
        return this.config;
    };
    BuyRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BuyRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BuyRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BuyRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BuyRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BuyRequest.fromDict = function (data) {
        return new BuyRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemId(data["displayItemId"])
            .withAccessToken(data["accessToken"])
            .withQuantity(data["quantity"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Showcase.Config.fromDict(item);
            }) : null);
    };
    BuyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemId": this.getDisplayItemId(),
            "accessToken": this.getAccessToken(),
            "quantity": this.getQuantity(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BuyRequest;
}());
exports.default = BuyRequest;
//# sourceMappingURL=BuyRequest.js.map