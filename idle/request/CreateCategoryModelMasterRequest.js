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
var CreateCategoryModelMasterRequest = /** @class */ (function () {
    function CreateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.rewardIntervalMinutes = null;
        this.defaultMaximumIdleMinutes = null;
        this.acquireActions = null;
        this.idlePeriodScheduleId = null;
        this.receivePeriodScheduleId = null;
    }
    CreateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateCategoryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateCategoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getRewardIntervalMinutes = function () {
        return this.rewardIntervalMinutes;
    };
    CreateCategoryModelMasterRequest.prototype.setRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withRewardIntervalMinutes = function (rewardIntervalMinutes) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getDefaultMaximumIdleMinutes = function () {
        return this.defaultMaximumIdleMinutes;
    };
    CreateCategoryModelMasterRequest.prototype.setDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withDefaultMaximumIdleMinutes = function (defaultMaximumIdleMinutes) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CreateCategoryModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getIdlePeriodScheduleId = function () {
        return this.idlePeriodScheduleId;
    };
    CreateCategoryModelMasterRequest.prototype.setIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withIdlePeriodScheduleId = function (idlePeriodScheduleId) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getReceivePeriodScheduleId = function () {
        return this.receivePeriodScheduleId;
    };
    CreateCategoryModelMasterRequest.prototype.setReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withReceivePeriodScheduleId = function (receivePeriodScheduleId) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    };
    CreateCategoryModelMasterRequest.fromDict = function (data) {
        return new CreateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
    CreateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateCategoryModelMasterRequest;
}());
exports.default = CreateCategoryModelMasterRequest;
//# sourceMappingURL=CreateCategoryModelMasterRequest.js.map