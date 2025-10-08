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
var GetBigItemModelRequest = /** @class */ (function () {
    function GetBigItemModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
    }
    GetBigItemModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBigItemModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBigItemModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBigItemModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemModelRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetBigItemModelRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemModelRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemModelRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetBigItemModelRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemModelRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemModelRequest.fromDict = function (data) {
        return new GetBigItemModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"]);
    };
    GetBigItemModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
        };
    };
    return GetBigItemModelRequest;
}());
exports.default = GetBigItemModelRequest;
//# sourceMappingURL=GetBigItemModelRequest.js.map