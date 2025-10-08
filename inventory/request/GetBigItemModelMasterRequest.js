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
var GetBigItemModelMasterRequest = /** @class */ (function () {
    function GetBigItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
    }
    GetBigItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBigItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBigItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBigItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetBigItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetBigItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetBigItemModelMasterRequest.fromDict = function (data) {
        return new GetBigItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"]);
    };
    GetBigItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
        };
    };
    return GetBigItemModelMasterRequest;
}());
exports.default = GetBigItemModelMasterRequest;
//# sourceMappingURL=GetBigItemModelMasterRequest.js.map