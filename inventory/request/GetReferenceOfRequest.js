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
var GetReferenceOfRequest = /** @class */ (function () {
    function GetReferenceOfRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
    }
    GetReferenceOfRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReferenceOfRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReferenceOfRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReferenceOfRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReferenceOfRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReferenceOfRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReferenceOfRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReferenceOfRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReferenceOfRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReferenceOfRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetReferenceOfRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetReferenceOfRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetReferenceOfRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetReferenceOfRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReferenceOfRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetReferenceOfRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetReferenceOfRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetReferenceOfRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetReferenceOfRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    GetReferenceOfRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetReferenceOfRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetReferenceOfRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    GetReferenceOfRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    GetReferenceOfRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    GetReferenceOfRequest.fromDict = function (data) {
        return new GetReferenceOfRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"]);
    };
    GetReferenceOfRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
        };
    };
    return GetReferenceOfRequest;
}());
exports.default = GetReferenceOfRequest;
//# sourceMappingURL=GetReferenceOfRequest.js.map