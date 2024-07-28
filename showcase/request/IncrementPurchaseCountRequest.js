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
var IncrementPurchaseCountRequest = /** @class */ (function () {
    function IncrementPurchaseCountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.accessToken = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    IncrementPurchaseCountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncrementPurchaseCountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncrementPurchaseCountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncrementPurchaseCountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    IncrementPurchaseCountRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    IncrementPurchaseCountRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    IncrementPurchaseCountRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getCount = function () {
        return this.count;
    };
    IncrementPurchaseCountRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncrementPurchaseCountRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementPurchaseCountRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementPurchaseCountRequest.fromDict = function (data) {
        return new IncrementPurchaseCountRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withAccessToken(data["accessToken"])
            .withCount(data["count"]);
    };
    IncrementPurchaseCountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "accessToken": this.getAccessToken(),
            "count": this.getCount(),
        };
    };
    return IncrementPurchaseCountRequest;
}());
exports.default = IncrementPurchaseCountRequest;
//# sourceMappingURL=IncrementPurchaseCountRequest.js.map