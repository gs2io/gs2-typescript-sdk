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
var GetItemWithSignatureRequest = /** @class */ (function () {
    function GetItemWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
        this.keyId = null;
    }
    GetItemWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetItemWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetItemWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetItemWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetItemWithSignatureRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetItemWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetItemWithSignatureRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    GetItemWithSignatureRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetItemWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetItemWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetItemWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetItemWithSignatureRequest.fromDict = function (data) {
        return new GetItemWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"])
            .withKeyId(data["keyId"]);
    };
    GetItemWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
            "keyId": this.getKeyId(),
        };
    };
    return GetItemWithSignatureRequest;
}());
exports.default = GetItemWithSignatureRequest;
//# sourceMappingURL=GetItemWithSignatureRequest.js.map