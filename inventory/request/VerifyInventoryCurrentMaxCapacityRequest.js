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
var VerifyInventoryCurrentMaxCapacityRequest = /** @class */ (function () {
    function VerifyInventoryCurrentMaxCapacityRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.inventoryName = null;
        this.verifyType = null;
        this.currentInventoryMaxCapacity = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getCurrentInventoryMaxCapacity = function () {
        return this.currentInventoryMaxCapacity;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyInventoryCurrentMaxCapacityRequest.fromDict = function (data) {
        return new VerifyInventoryCurrentMaxCapacityRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withInventoryName(data["inventoryName"])
            .withVerifyType(data["verifyType"])
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyInventoryCurrentMaxCapacityRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "inventoryName": this.getInventoryName(),
            "verifyType": this.getVerifyType(),
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyInventoryCurrentMaxCapacityRequest;
}());
exports.default = VerifyInventoryCurrentMaxCapacityRequest;
//# sourceMappingURL=VerifyInventoryCurrentMaxCapacityRequest.js.map