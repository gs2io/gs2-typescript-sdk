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
var GetSimpleItemRequest = /** @class */ (function () {
    function GetSimpleItemRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
    }
    GetSimpleItemRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSimpleItemRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSimpleItemRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSimpleItemRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetSimpleItemRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSimpleItemRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSimpleItemRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSimpleItemRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetSimpleItemRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemRequest.fromDict = function (data) {
        return new GetSimpleItemRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"]);
    };
    GetSimpleItemRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
        };
    };
    return GetSimpleItemRequest;
}());
exports.default = GetSimpleItemRequest;
//# sourceMappingURL=GetSimpleItemRequest.js.map