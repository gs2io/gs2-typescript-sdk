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
var AcquireItemSetWithGradeByUserIdRequest = /** @class */ (function () {
    function AcquireItemSetWithGradeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
        this.userId = null;
        this.gradeModelId = null;
        this.gradeValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireItemSetWithGradeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireItemSetWithGradeByUserIdRequest.fromDict = function (data) {
        return new AcquireItemSetWithGradeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withUserId(data["userId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeValue(data["gradeValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireItemSetWithGradeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "userId": this.getUserId(),
            "gradeModelId": this.getGradeModelId(),
            "gradeValue": this.getGradeValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcquireItemSetWithGradeByUserIdRequest;
}());
exports.default = AcquireItemSetWithGradeByUserIdRequest;
//# sourceMappingURL=AcquireItemSetWithGradeByUserIdRequest.js.map