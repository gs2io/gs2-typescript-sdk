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
var SetSimpleItemsByUserIdRequest = /** @class */ (function () {
    function SetSimpleItemsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.counts = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetSimpleItemsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetSimpleItemsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetSimpleItemsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetSimpleItemsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    SetSimpleItemsByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetSimpleItemsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getCounts = function () {
        return this.counts;
    };
    SetSimpleItemsByUserIdRequest.prototype.setCounts = function (counts) {
        this.counts = counts;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withCounts = function (counts) {
        this.counts = counts;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetSimpleItemsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetSimpleItemsByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetSimpleItemsByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetSimpleItemsByUserIdRequest.fromDict = function (data) {
        return new SetSimpleItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withCounts(data.counts ?
            data.counts.map(function (item) {
                return Gs2Inventory.HeldCount.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetSimpleItemsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "counts": this.getCounts() ?
                this.getCounts().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetSimpleItemsByUserIdRequest;
}());
exports.default = SetSimpleItemsByUserIdRequest;
//# sourceMappingURL=SetSimpleItemsByUserIdRequest.js.map