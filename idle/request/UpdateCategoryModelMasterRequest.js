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
var Gs2Idle = tslib_1.__importStar(require("../model"));
var UpdateCategoryModelMasterRequest = /** @class */ (function () {
    function UpdateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.description = null;
        this.metadata = null;
        this.rewardIntervalMinutes = null;
        this.defaultMaximumIdleMinutes = null;
        this.acquireActions = null;
        this.idlePeriodScheduleId = null;
        this.receivePeriodScheduleId = null;
    }
    UpdateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    UpdateCategoryModelMasterRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateCategoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getRewardIntervalMinutes = function () {
        return this.rewardIntervalMinutes;
    };
    UpdateCategoryModelMasterRequest.prototype.setRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getDefaultMaximumIdleMinutes = function () {
        return this.defaultMaximumIdleMinutes;
    };
    UpdateCategoryModelMasterRequest.prototype.setDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    UpdateCategoryModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getIdlePeriodScheduleId = function () {
        return this.idlePeriodScheduleId;
    };
    UpdateCategoryModelMasterRequest.prototype.setIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getReceivePeriodScheduleId = function () {
        return this.receivePeriodScheduleId;
    };
    UpdateCategoryModelMasterRequest.prototype.setReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    UpdateCategoryModelMasterRequest.fromDict = function (data) {
        return new UpdateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withRewardIntervalMinutes(data["rewardIntervalMinutes"])
            .withDefaultMaximumIdleMinutes(data["defaultMaximumIdleMinutes"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Idle.AcquireActionList.fromDict(item);
            }) : null)
            .withIdlePeriodScheduleId(data["idlePeriodScheduleId"])
            .withReceivePeriodScheduleId(data["receivePeriodScheduleId"]);
    };
    UpdateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "rewardIntervalMinutes": this.getRewardIntervalMinutes(),
            "defaultMaximumIdleMinutes": this.getDefaultMaximumIdleMinutes(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "idlePeriodScheduleId": this.getIdlePeriodScheduleId(),
            "receivePeriodScheduleId": this.getReceivePeriodScheduleId(),
        };
    };
    return UpdateCategoryModelMasterRequest;
}());
exports.default = UpdateCategoryModelMasterRequest;
//# sourceMappingURL=UpdateCategoryModelMasterRequest.js.map