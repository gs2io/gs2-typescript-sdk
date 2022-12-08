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
var VerifyReferenceOfRequest = /** @class */ (function () {
    function VerifyReferenceOfRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyReferenceOfRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyReferenceOfRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyReferenceOfRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyReferenceOfRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    VerifyReferenceOfRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyReferenceOfRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    VerifyReferenceOfRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    VerifyReferenceOfRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    VerifyReferenceOfRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyReferenceOfRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyReferenceOfRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyReferenceOfRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReferenceOfRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReferenceOfRequest.fromDict = function (data) {
        return new VerifyReferenceOfRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyReferenceOfRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyReferenceOfRequest;
}());
exports.default = VerifyReferenceOfRequest;
//# sourceMappingURL=VerifyReferenceOfRequest.js.map