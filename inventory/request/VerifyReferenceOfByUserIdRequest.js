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
var VerifyReferenceOfByUserIdRequest = /** @class */ (function () {
    function VerifyReferenceOfByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyReferenceOfByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyReferenceOfByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReferenceOfByUserIdRequest.fromDict = function (data) {
        return new VerifyReferenceOfByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyReferenceOfByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyReferenceOfByUserIdRequest;
}());
exports.default = VerifyReferenceOfByUserIdRequest;
//# sourceMappingURL=VerifyReferenceOfByUserIdRequest.js.map