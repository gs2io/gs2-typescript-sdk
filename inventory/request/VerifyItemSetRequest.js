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
var VerifyItemSetRequest = /** @class */ (function () {
    function VerifyItemSetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.inventoryName = null;
        this.itemName = null;
        this.verifyType = null;
        this.itemSetName = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyItemSetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyItemSetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyItemSetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyItemSetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyItemSetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyItemSetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyItemSetRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyItemSetRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyItemSetRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyItemSetRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyItemSetRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyItemSetRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyItemSetRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyItemSetRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyItemSetRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyItemSetRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyItemSetRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyItemSetRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyItemSetRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyItemSetRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyItemSetRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyItemSetRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    VerifyItemSetRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyItemSetRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyItemSetRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyItemSetRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyItemSetRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyItemSetRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyItemSetRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyItemSetRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyItemSetRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyItemSetRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyItemSetRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyItemSetRequest.fromDict = function (data) {
        return new VerifyItemSetRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withVerifyType(data["verifyType"])
            .withItemSetName(data["itemSetName"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyItemSetRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "verifyType": this.getVerifyType(),
            "itemSetName": this.getItemSetName(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyItemSetRequest;
}());
exports.default = VerifyItemSetRequest;
//# sourceMappingURL=VerifyItemSetRequest.js.map