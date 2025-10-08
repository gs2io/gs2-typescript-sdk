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
var GetSimpleItemModelMasterRequest = /** @class */ (function () {
    function GetSimpleItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
    }
    GetSimpleItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSimpleItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSimpleItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSimpleItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetSimpleItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetSimpleItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemModelMasterRequest.fromDict = function (data) {
        return new GetSimpleItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"]);
    };
    GetSimpleItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
        };
    };
    return GetSimpleItemModelMasterRequest;
}());
exports.default = GetSimpleItemModelMasterRequest;
//# sourceMappingURL=GetSimpleItemModelMasterRequest.js.map