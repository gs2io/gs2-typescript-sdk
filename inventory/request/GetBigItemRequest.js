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
var GetBigItemRequest = /** @class */ (function () {
    function GetBigItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
    }
    GetBigItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBigItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBigItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBigItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetBigItemRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetBigItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBigItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetBigItemRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetBigItemRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemRequest.fromDict = function (data) {
        return new GetBigItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"]);
    };
    GetBigItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
        };
    };
    return GetBigItemRequest;
}());
exports.default = GetBigItemRequest;
//# sourceMappingURL=GetBigItemRequest.js.map