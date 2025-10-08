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
var RandomShowcaseBuyRequest = /** @class */ (function () {
    function RandomShowcaseBuyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.accessToken = null;
        this.quantity = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    RandomShowcaseBuyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RandomShowcaseBuyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RandomShowcaseBuyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RandomShowcaseBuyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    RandomShowcaseBuyRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    RandomShowcaseBuyRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RandomShowcaseBuyRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getQuantity = function () {
        return this.quantity;
    };
    RandomShowcaseBuyRequest.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withQuantity = function (quantity) {
        this.quantity = quantity;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getConfig = function () {
        return this.config;
    };
    RandomShowcaseBuyRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RandomShowcaseBuyRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RandomShowcaseBuyRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RandomShowcaseBuyRequest.fromDict = function (data) {
        return new RandomShowcaseBuyRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withAccessToken(data["accessToken"])
            .withQuantity(data["quantity"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Showcase.Config.fromDict(item);
            }) : null);
    };
    RandomShowcaseBuyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "accessToken": this.getAccessToken(),
            "quantity": this.getQuantity(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return RandomShowcaseBuyRequest;
}());
exports.default = RandomShowcaseBuyRequest;
//# sourceMappingURL=RandomShowcaseBuyRequest.js.map