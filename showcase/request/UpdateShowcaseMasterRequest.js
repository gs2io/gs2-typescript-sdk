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
var UpdateShowcaseMasterRequest = /** @class */ (function () {
    function UpdateShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.description = null;
        this.metadata = null;
        this.displayItems = null;
        this.salesPeriodEventId = null;
    }
    UpdateShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    UpdateShowcaseMasterRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateShowcaseMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateShowcaseMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    UpdateShowcaseMasterRequest.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    UpdateShowcaseMasterRequest.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    UpdateShowcaseMasterRequest.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    UpdateShowcaseMasterRequest.fromDict = function (data) {
        return new UpdateShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return Gs2Showcase.DisplayItemMaster.fromDict(item);
            }) : [])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    };
    UpdateShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    };
    return UpdateShowcaseMasterRequest;
}());
exports.default = UpdateShowcaseMasterRequest;
//# sourceMappingURL=UpdateShowcaseMasterRequest.js.map