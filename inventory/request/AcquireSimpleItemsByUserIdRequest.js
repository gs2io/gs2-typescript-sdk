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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var AcquireSimpleItemsByUserIdRequest = /** @class */ (function () {
    function AcquireSimpleItemsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.acquireCounts = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireSimpleItemsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getAcquireCounts = function () {
        return this.acquireCounts;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setAcquireCounts = function (acquireCounts) {
        this.acquireCounts = acquireCounts;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withAcquireCounts = function (acquireCounts) {
        this.acquireCounts = acquireCounts;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireSimpleItemsByUserIdRequest.fromDict = function (data) {
        return new AcquireSimpleItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withAcquireCounts(data.acquireCounts ?
            data.acquireCounts.map(function (item) {
                return Gs2Inventory.AcquireCount.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireSimpleItemsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "acquireCounts": this.getAcquireCounts() ?
                this.getAcquireCounts().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcquireSimpleItemsByUserIdRequest;
}());
exports.default = AcquireSimpleItemsByUserIdRequest;
//# sourceMappingURL=AcquireSimpleItemsByUserIdRequest.js.map