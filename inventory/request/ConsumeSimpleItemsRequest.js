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
var tslib_1 = require("tslib");
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var ConsumeSimpleItemsRequest = /** @class */ (function () {
    function ConsumeSimpleItemsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.accessToken = null;
        this.consumeCounts = null;
        this.duplicationAvoider = null;
    }
    ConsumeSimpleItemsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeSimpleItemsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeSimpleItemsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeSimpleItemsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ConsumeSimpleItemsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ConsumeSimpleItemsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getConsumeCounts = function () {
        return this.consumeCounts;
    };
    ConsumeSimpleItemsRequest.prototype.setConsumeCounts = function (consumeCounts) {
        this.consumeCounts = consumeCounts;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withConsumeCounts = function (consumeCounts) {
        this.consumeCounts = consumeCounts;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeSimpleItemsRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeSimpleItemsRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeSimpleItemsRequest.fromDict = function (data) {
        return new ConsumeSimpleItemsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withAccessToken(data["accessToken"])
            .withConsumeCounts(data.consumeCounts ?
            data.consumeCounts.map(function (item) {
                return Gs2Inventory.ConsumeCount.fromDict(item);
            }) : []);
    };
    ConsumeSimpleItemsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "accessToken": this.getAccessToken(),
            "consumeCounts": this.getConsumeCounts() ?
                this.getConsumeCounts().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ConsumeSimpleItemsRequest;
}());
exports.default = ConsumeSimpleItemsRequest;
//# sourceMappingURL=ConsumeSimpleItemsRequest.js.map