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
var ConsumeItemSetRequest = /** @class */ (function () {
    function ConsumeItemSetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.itemName = null;
        this.consumeCount = null;
        this.itemSetName = null;
        this.duplicationAvoider = null;
    }
    ConsumeItemSetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeItemSetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeItemSetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeItemSetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeItemSetRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeItemSetRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeItemSetRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeItemSetRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeItemSetRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeItemSetRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeItemSetRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ConsumeItemSetRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeItemSetRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeItemSetRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    ConsumeItemSetRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeItemSetRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeItemSetRequest.prototype.getConsumeCount = function () {
        return this.consumeCount;
    };
    ConsumeItemSetRequest.prototype.setConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeItemSetRequest.prototype.withConsumeCount = function (consumeCount) {
        this.consumeCount = consumeCount;
        return this;
    };
    ConsumeItemSetRequest.prototype.getItemSetName = function () {
        return this.itemSetName;
    };
    ConsumeItemSetRequest.prototype.setItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    ConsumeItemSetRequest.prototype.withItemSetName = function (itemSetName) {
        this.itemSetName = itemSetName;
        return this;
    };
    ConsumeItemSetRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeItemSetRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeItemSetRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeItemSetRequest.fromDict = function (data) {
        return new ConsumeItemSetRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withItemName(data["itemName"])
            .withConsumeCount(data["consumeCount"])
            .withItemSetName(data["itemSetName"]);
    };
    ConsumeItemSetRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "itemName": this.getItemName(),
            "consumeCount": this.getConsumeCount(),
            "itemSetName": this.getItemSetName(),
        };
    };
    return ConsumeItemSetRequest;
}());
exports.default = ConsumeItemSetRequest;
//# sourceMappingURL=ConsumeItemSetRequest.js.map