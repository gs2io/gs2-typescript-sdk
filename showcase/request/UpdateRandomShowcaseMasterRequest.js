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
var UpdateRandomShowcaseMasterRequest = /** @class */ (function () {
    function UpdateRandomShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.description = null;
        this.metadata = null;
        this.maximumNumberOfChoice = null;
        this.displayItems = null;
        this.baseTimestamp = null;
        this.resetIntervalHours = null;
        this.salesPeriodEventId = null;
    }
    UpdateRandomShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getMaximumNumberOfChoice = function () {
        return this.maximumNumberOfChoice;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withMaximumNumberOfChoice = function (maximumNumberOfChoice) {
        this.maximumNumberOfChoice = maximumNumberOfChoice;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getBaseTimestamp = function () {
        return this.baseTimestamp;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withBaseTimestamp = function (baseTimestamp) {
        this.baseTimestamp = baseTimestamp;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getResetIntervalHours = function () {
        return this.resetIntervalHours;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withResetIntervalHours = function (resetIntervalHours) {
        this.resetIntervalHours = resetIntervalHours;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.getSalesPeriodEventId = function () {
        return this.salesPeriodEventId;
    };
    UpdateRandomShowcaseMasterRequest.prototype.setSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.prototype.withSalesPeriodEventId = function (salesPeriodEventId) {
        this.salesPeriodEventId = salesPeriodEventId;
        return this;
    };
    UpdateRandomShowcaseMasterRequest.fromDict = function (data) {
        return new UpdateRandomShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
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
    UpdateRandomShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
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
    return UpdateRandomShowcaseMasterRequest;
}());
exports.default = UpdateRandomShowcaseMasterRequest;
//# sourceMappingURL=UpdateRandomShowcaseMasterRequest.js.map