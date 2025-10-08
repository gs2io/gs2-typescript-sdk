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
var GetSimpleItemWithSignatureRequest = /** @class */ (function () {
    function GetSimpleItemWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.keyId = null;
    }
    GetSimpleItemWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSimpleItemWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSimpleItemWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSimpleItemWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetSimpleItemWithSignatureRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSimpleItemWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    GetSimpleItemWithSignatureRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetSimpleItemWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetSimpleItemWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetSimpleItemWithSignatureRequest.fromDict = function (data) {
        return new GetSimpleItemWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withKeyId(data["keyId"]);
    };
    GetSimpleItemWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "keyId": this.getKeyId(),
        };
    };
    return GetSimpleItemWithSignatureRequest;
}());
exports.default = GetSimpleItemWithSignatureRequest;
//# sourceMappingURL=GetSimpleItemWithSignatureRequest.js.map