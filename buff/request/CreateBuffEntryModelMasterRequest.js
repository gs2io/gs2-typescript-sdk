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
var CreateBuffEntryModelMasterRequest = /** @class */ (function () {
    function CreateBuffEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetType = null;
        this.targetModel = null;
        this.targetAction = null;
        this.expression = null;
        this.priority = null;
        this.applyPeriodScheduleEventId = null;
    }
    CreateBuffEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBuffEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBuffEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateBuffEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateBuffEntryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBuffEntryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateBuffEntryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getTargetType = function () {
        return this.targetType;
    };
    CreateBuffEntryModelMasterRequest.prototype.setTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getTargetModel = function () {
        return this.targetModel;
    };
    CreateBuffEntryModelMasterRequest.prototype.setTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getTargetAction = function () {
        return this.targetAction;
    };
    CreateBuffEntryModelMasterRequest.prototype.setTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getExpression = function () {
        return this.expression;
    };
    CreateBuffEntryModelMasterRequest.prototype.setExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getPriority = function () {
        return this.priority;
    };
    CreateBuffEntryModelMasterRequest.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.getApplyPeriodScheduleEventId = function () {
        return this.applyPeriodScheduleEventId;
    };
    CreateBuffEntryModelMasterRequest.prototype.setApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    CreateBuffEntryModelMasterRequest.prototype.withApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    CreateBuffEntryModelMasterRequest.fromDict = function (data) {
        return new CreateBuffEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetType(data["targetType"])
            .withTargetModel(Gs2Buff.BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(Gs2Buff.BuffTargetAction.fromDict(data["targetAction"]))
            .withExpression(data["expression"])
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"]);
    };
    CreateBuffEntryModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateBuffEntryModelMasterRequest;
}());
exports.default = CreateBuffEntryModelMasterRequest;
//# sourceMappingURL=CreateBuffEntryModelMasterRequest.js.map