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
var GetSimpleItemModelRequest = /** @class */ (function () {
    function GetSimpleItemModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
    }
    GetSimpleItemModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSimpleItemModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSimpleItemModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSimpleItemModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemModelRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetSimpleItemModelRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemModelRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemModelRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetSimpleItemModelRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemModelRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemModelRequest.fromDict = function (data) {
        return new GetSimpleItemModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"]);
    };
    GetSimpleItemModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
        };
    };
    return GetSimpleItemModelRequest;
}());
exports.default = GetSimpleItemModelRequest;
//# sourceMappingURL=GetSimpleItemModelRequest.js.map