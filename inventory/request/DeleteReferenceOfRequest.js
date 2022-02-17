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
var DeleteReferenceOfRequest = /** @class */ (function () {
    function DeleteReferenceOfRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
        this.referenceOf = null;
    }
    DeleteReferenceOfRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteReferenceOfRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteReferenceOfRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteReferenceOfRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DeleteReferenceOfRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteReferenceOfRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    DeleteReferenceOfRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    DeleteReferenceOfRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    DeleteReferenceOfRequest.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    DeleteReferenceOfRequest.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    DeleteReferenceOfRequest.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    DeleteReferenceOfRequest.fromDict = function (data) {
        return new DeleteReferenceOfRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withReferenceOf(data["referenceOf"]);
    };
    DeleteReferenceOfRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "referenceOf": this.getReferenceOf(),
        };
    };
    return DeleteReferenceOfRequest;
}());
exports.default = DeleteReferenceOfRequest;
//# sourceMappingURL=DeleteReferenceOfRequest.js.map