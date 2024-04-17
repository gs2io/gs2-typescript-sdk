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
var Gs2Buff = tslib_1.__importStar(require("../model"));
var UpdateBuffEntryModelMasterRequest = /** @class */ (function () {
    function UpdateBuffEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.buffEntryName = null;
        this.description = null;
        this.metadata = null;
        this.targetType = null;
        this.targetModel = null;
        this.targetAction = null;
        this.expression = null;
        this.priority = null;
        this.applyPeriodScheduleEventId = null;
    }
    UpdateBuffEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getBuffEntryName = function () {
        return this.buffEntryName;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withBuffEntryName = function (buffEntryName) {
        this.buffEntryName = buffEntryName;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getTargetType = function () {
        return this.targetType;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getTargetModel = function () {
        return this.targetModel;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getTargetAction = function () {
        return this.targetAction;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getExpression = function () {
        return this.expression;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getPriority = function () {
        return this.priority;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.getApplyPeriodScheduleEventId = function () {
        return this.applyPeriodScheduleEventId;
    };
    UpdateBuffEntryModelMasterRequest.prototype.setApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.prototype.withApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    UpdateBuffEntryModelMasterRequest.fromDict = function (data) {
        return new UpdateBuffEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBuffEntryName(data["buffEntryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetType(data["targetType"])
            .withTargetModel(Gs2Buff.BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(Gs2Buff.BuffTargetAction.fromDict(data["targetAction"]))
            .withExpression(data["expression"])
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"]);
    };
    UpdateBuffEntryModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "buffEntryName": this.getBuffEntryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetType": this.getTargetType(),
            "targetModel": (_a = this.getTargetModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "targetAction": (_b = this.getTargetAction()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "expression": this.getExpression(),
            "priority": this.getPriority(),
            "applyPeriodScheduleEventId": this.getApplyPeriodScheduleEventId(),
        };
    };
    return UpdateBuffEntryModelMasterRequest;
}());
exports.default = UpdateBuffEntryModelMasterRequest;
//# sourceMappingURL=UpdateBuffEntryModelMasterRequest.js.map