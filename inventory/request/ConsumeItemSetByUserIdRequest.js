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
var ConsumeItemSetByUserIdRequest = /** @class */ (function () {
    function ConsumeItemSetByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.consumeCount = null;
        this.itemSetName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ConsumeItemSetByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeItemSetByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeItemSetByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeItemSetByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeItemSetByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ConsumeItemSetByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    ConsumeItemSetByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getConsumeCount = function () {
        return this.consumeCount;
    };
    ConsumeItemSetByUserIdRequest.prototype.setConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    ConsumeItemSetByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ConsumeItemSetByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeItemSetByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeItemSetByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeItemSetByUserIdRequest.fromDict = function (data) {
        return new ConsumeItemSetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withConsumeCount(data["consumeCount"])
            .withItemSetName(data["itemSetName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ConsumeItemSetByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "consumeCount": this.getConsumeCount(),
            "itemSetName": this.getItemSetName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ConsumeItemSetByUserIdRequest;
}());
exports.default = ConsumeItemSetByUserIdRequest;
//# sourceMappingURL=ConsumeItemSetByUserIdRequest.js.map