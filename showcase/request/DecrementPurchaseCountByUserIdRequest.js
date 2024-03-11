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
var DecrementPurchaseCountByUserIdRequest = /** @class */ (function () {
    function DecrementPurchaseCountByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.displayItemName = null;
        this.userId = null;
        this.count = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DecrementPurchaseCountByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getDisplayItemName = function () {
        return this.displayItemName;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withDisplayItemName = function (displayItemName) {
        this.displayItemName = displayItemName;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecrementPurchaseCountByUserIdRequest.fromDict = function (data) {
        return new DecrementPurchaseCountByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDisplayItemName(data["displayItemName"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DecrementPurchaseCountByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "displayItemName": this.getDisplayItemName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DecrementPurchaseCountByUserIdRequest;
}());
exports.default = DecrementPurchaseCountByUserIdRequest;
//# sourceMappingURL=DecrementPurchaseCountByUserIdRequest.js.map