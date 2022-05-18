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
var Gs2Showcase = tslib_1.__importStar(require("../model"));
var CreateShowcaseMasterRequest = /** @class */ (function () {
    function CreateShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.displayItems = null;
        this.salesPeriodEventId = null;
    }
    CreateShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateShowcaseMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateShowcaseMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateShowcaseMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    CreateShowcaseMasterRequest.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    CreateShowcaseMasterRequest.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    CreateShowcaseMasterRequest.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    CreateShowcaseMasterRequest.fromDict = function (data) {
        return new CreateShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return Gs2Showcase.DisplayItemMaster.fromDict(item);
            }) : [])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    };
    CreateShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    };
    return CreateShowcaseMasterRequest;
}());
exports.default = CreateShowcaseMasterRequest;
//# sourceMappingURL=CreateShowcaseMasterRequest.js.map