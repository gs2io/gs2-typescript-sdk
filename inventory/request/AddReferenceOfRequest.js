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
var AddReferenceOfRequest = /** @class */ (function () {
    function AddReferenceOfRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
        this.duplicationAvoider = null;
    }
    AddReferenceOfRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddReferenceOfRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddReferenceOfRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddReferenceOfRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddReferenceOfRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddReferenceOfRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddReferenceOfRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddReferenceOfRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    AddReferenceOfRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddReferenceOfRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    AddReferenceOfRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AddReferenceOfRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddReferenceOfRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddReferenceOfRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    AddReferenceOfRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AddReferenceOfRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    AddReferenceOfRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    AddReferenceOfRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AddReferenceOfRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    AddReferenceOfRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    AddReferenceOfRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    AddReferenceOfRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    AddReferenceOfRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddReferenceOfRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddReferenceOfRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddReferenceOfRequest.fromDict = function (data) {
        return new AddReferenceOfRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"]);
    };
    AddReferenceOfRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
        };
    };
    return AddReferenceOfRequest;
}());
exports.default = AddReferenceOfRequest;
//# sourceMappingURL=AddReferenceOfRequest.js.map