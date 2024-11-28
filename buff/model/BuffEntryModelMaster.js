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
var Gs2Buff = tslib_1.__importStar(require("../../buff/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:buff:{namespaceName}:model:{buffEntryName}";
var BuffEntryModelMaster = /** @class */ (function () {
    function BuffEntryModelMaster() {
        this.buffEntryModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.expression = null;
        this.targetType = null;
        this.targetModel = null;
        this.targetAction = null;
        this.priority = null;
        this.applyPeriodScheduleEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BuffEntryModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{buffEntryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BuffEntryModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{buffEntryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BuffEntryModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{buffEntryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BuffEntryModelMaster.getBuffEntryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{buffEntryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BuffEntryModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getBuffEntryName(grn) == null || this.getBuffEntryName(grn) === '') {
            return false;
        }
        return true;
    };
    BuffEntryModelMaster.createGrn = function (region, ownerId, namespaceName, buffEntryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{buffEntryName}', buffEntryName !== null && buffEntryName !== void 0 ? buffEntryName : '');
    };
    BuffEntryModelMaster.prototype.getBuffEntryModelId = function () {
        return this.buffEntryModelId;
    };
    BuffEntryModelMaster.prototype.setBuffEntryModelId = function (buffEntryModelId) {
        this.buffEntryModelId = buffEntryModelId;
        return this;
    };
    BuffEntryModelMaster.prototype.withBuffEntryModelId = function (buffEntryModelId) {
        this.buffEntryModelId = buffEntryModelId;
        return this;
    };
    BuffEntryModelMaster.prototype.getName = function () {
        return this.name;
    };
    BuffEntryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BuffEntryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BuffEntryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    BuffEntryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    BuffEntryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    BuffEntryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    BuffEntryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BuffEntryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BuffEntryModelMaster.prototype.getExpression = function () {
        return this.expression;
    };
    BuffEntryModelMaster.prototype.setExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    BuffEntryModelMaster.prototype.withExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    BuffEntryModelMaster.prototype.getTargetType = function () {
        return this.targetType;
    };
    BuffEntryModelMaster.prototype.setTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    BuffEntryModelMaster.prototype.withTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    BuffEntryModelMaster.prototype.getTargetModel = function () {
        return this.targetModel;
    };
    BuffEntryModelMaster.prototype.setTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    BuffEntryModelMaster.prototype.withTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    BuffEntryModelMaster.prototype.getTargetAction = function () {
        return this.targetAction;
    };
    BuffEntryModelMaster.prototype.setTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    BuffEntryModelMaster.prototype.withTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    BuffEntryModelMaster.prototype.getPriority = function () {
        return this.priority;
    };
    BuffEntryModelMaster.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    BuffEntryModelMaster.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    BuffEntryModelMaster.prototype.getApplyPeriodScheduleEventId = function () {
        return this.applyPeriodScheduleEventId;
    };
    BuffEntryModelMaster.prototype.setApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    BuffEntryModelMaster.prototype.withApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    BuffEntryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BuffEntryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BuffEntryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BuffEntryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BuffEntryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BuffEntryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BuffEntryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    BuffEntryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BuffEntryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BuffEntryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffEntryModelMaster()
            .withBuffEntryModelId(data["buffEntryModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withExpression(data["expression"])
            .withTargetType(data["targetType"])
            .withTargetModel(Gs2Buff.BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(Gs2Buff.BuffTargetAction.fromDict(data["targetAction"]))
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BuffEntryModelMaster.prototype.toDict = function () {
        var _a, _b;
        return {
            "buffEntryModelId": this.getBuffEntryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "expression": this.getExpression(),
            "targetType": this.getTargetType(),
            "targetModel": (_a = this.getTargetModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "targetAction": (_b = this.getTargetAction()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "priority": this.getPriority(),
            "applyPeriodScheduleEventId": this.getApplyPeriodScheduleEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return BuffEntryModelMaster;
}());
exports.default = BuffEntryModelMaster;
//# sourceMappingURL=BuffEntryModelMaster.js.map