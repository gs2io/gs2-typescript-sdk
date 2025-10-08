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
var GetItemSetRequest = /** @class */ (function () {
    function GetItemSetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.itemSetName = null;
    }
    GetItemSetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetItemSetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetItemSetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetItemSetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetItemSetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetItemSetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetItemSetRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetItemSetRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetItemSetRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetItemSetRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetItemSetRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetItemSetRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetItemSetRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetItemSetRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetItemSetRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetItemSetRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetItemSetRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetItemSetRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetItemSetRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    GetItemSetRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetItemSetRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    GetItemSetRequest.fromDict = function (data) {
        return new GetItemSetRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withItemSetName(data["itemSetName"]);
    };
    GetItemSetRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "itemSetName": this.getItemSetName(),
        };
    };
    return GetItemSetRequest;
}());
exports.default = GetItemSetRequest;
//# sourceMappingURL=GetItemSetRequest.js.map