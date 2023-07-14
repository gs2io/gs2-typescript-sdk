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
var IncrementPurchaseCountByUserIdRequest = /** @class */ (function () {
    function IncrementPurchaseCountByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.userId = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    IncrementPurchaseCountByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncrementPurchaseCountByUserIdRequest.fromDict = function (data) {
        return new IncrementPurchaseCountByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withUserId(data["userId"])
            .withCount(data["count"]);
    };
    IncrementPurchaseCountByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
        };
    };
    return IncrementPurchaseCountByUserIdRequest;
}());
exports.default = IncrementPurchaseCountByUserIdRequest;
//# sourceMappingURL=IncrementPurchaseCountByUserIdRequest.js.map