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
var CreateRandomShowcaseMasterRequest = /** @class */ (function () {
    function CreateRandomShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.maximumNumberOfChoice = null;
        this.displayItems = null;
        this.baseTimestamp = null;
        this.resetIntervalHours = null;
        this.salesPeriodEventId = null;
    }
    CreateRandomShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRandomShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRandomShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRandomShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRandomShowcaseMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRandomShowcaseMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRandomShowcaseMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getMaximumNumberOfChoice = function () {
        return this.maximumNumberOfChoice;
    };
    CreateRandomShowcaseMasterRequest.prototype.setMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    CreateRandomShowcaseMasterRequest.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getBaseTimestamp = function () {
        return this.baseTimestamp;
    };
    CreateRandomShowcaseMasterRequest.prototype.setBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getResetIntervalHours = function () {
        return this.resetIntervalHours;
    };
    CreateRandomShowcaseMasterRequest.prototype.setResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    CreateRandomShowcaseMasterRequest.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    CreateRandomShowcaseMasterRequest.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    CreateRandomShowcaseMasterRequest.fromDict = function (data) {
        return new CreateRandomShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMaximumNumberOfChoice(data["maximumNumberOfChoice"])
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return Gs2Showcase.RandomDisplayItemModel.fromDict(item);
            }) : [])
            .withBaseTimestamp(data["baseTimestamp"])
            .withResetIntervalHours(data["resetIntervalHours"])
            .withSalesPeriodEventId(data["salesPeriodEventId"]);
    };
    CreateRandomShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "maximumNumberOfChoice": this.getMaximumNumberOfChoice(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "baseTimestamp": this.getBaseTimestamp(),
            "resetIntervalHours": this.getResetIntervalHours(),
            "salesPeriodEventId": this.getSalesPeriodEventId(),
        };
    };
    return CreateRandomShowcaseMasterRequest;
}());
exports.default = CreateRandomShowcaseMasterRequest;
//# sourceMappingURL=CreateRandomShowcaseMasterRequest.js.map