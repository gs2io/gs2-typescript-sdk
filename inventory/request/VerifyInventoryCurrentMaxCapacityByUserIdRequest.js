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
var VerifyInventoryCurrentMaxCapacityByUserIdRequest = /** @class */ (function () {
    function VerifyInventoryCurrentMaxCapacityByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.inventoryName = null;
        this.verifyType = null;
        this.currentInventoryMaxCapacity = null;
        this.duplicationAvoider = null;
    }
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getCurrentInventoryMaxCapacity = function () {
        return this.currentInventoryMaxCapacity;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.fromDict = function (data) {
        return new VerifyInventoryCurrentMaxCapacityByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withInventoryName(data["inventoryName"])
            .withVerifyType(data["verifyType"])
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"]);
    };
    VerifyInventoryCurrentMaxCapacityByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "inventoryName": this.getInventoryName(),
            "verifyType": this.getVerifyType(),
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
        };
    };
    return VerifyInventoryCurrentMaxCapacityByUserIdRequest;
}());
exports.default = VerifyInventoryCurrentMaxCapacityByUserIdRequest;
//# sourceMappingURL=VerifyInventoryCurrentMaxCapacityByUserIdRequest.js.map