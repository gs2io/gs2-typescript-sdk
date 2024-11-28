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
var BuffEntryModel = /** @class */ (function () {
    function BuffEntryModel() {
        this.buffEntryModelId = null;
        this.name = null;
        this.metadata = null;
        this.expression = null;
        this.targetType = null;
        this.targetModel = null;
        this.targetAction = null;
        this.priority = null;
        this.applyPeriodScheduleEventId = null;
    }
    BuffEntryModel.getRegion = function (grn) {
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
    BuffEntryModel.getOwnerId = function (grn) {
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
    BuffEntryModel.getNamespaceName = function (grn) {
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
    BuffEntryModel.getBuffEntryName = function (grn) {
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
    BuffEntryModel.isValid = function (grn) {
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
    BuffEntryModel.createGrn = function (region, ownerId, namespaceName, buffEntryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{buffEntryName}', buffEntryName !== null && buffEntryName !== void 0 ? buffEntryName : '');
    };
    BuffEntryModel.prototype.getBuffEntryModelId = function () {
        return this.buffEntryModelId;
    };
    BuffEntryModel.prototype.setBuffEntryModelId = function (buffEntryModelId) {
        this.buffEntryModelId = buffEntryModelId;
        return this;
    };
    BuffEntryModel.prototype.withBuffEntryModelId = function (buffEntryModelId) {
        this.buffEntryModelId = buffEntryModelId;
        return this;
    };
    BuffEntryModel.prototype.getName = function () {
        return this.name;
    };
    BuffEntryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BuffEntryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BuffEntryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    BuffEntryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BuffEntryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BuffEntryModel.prototype.getExpression = function () {
        return this.expression;
    };
    BuffEntryModel.prototype.setExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    BuffEntryModel.prototype.withExpression = function (expression) {
        this.expression = expression;
        return this;
    };
    BuffEntryModel.prototype.getTargetType = function () {
        return this.targetType;
    };
    BuffEntryModel.prototype.setTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    BuffEntryModel.prototype.withTargetType = function (targetType) {
        this.targetType = targetType;
        return this;
    };
    BuffEntryModel.prototype.getTargetModel = function () {
        return this.targetModel;
    };
    BuffEntryModel.prototype.setTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    BuffEntryModel.prototype.withTargetModel = function (targetModel) {
        this.targetModel = targetModel;
        return this;
    };
    BuffEntryModel.prototype.getTargetAction = function () {
        return this.targetAction;
    };
    BuffEntryModel.prototype.setTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    BuffEntryModel.prototype.withTargetAction = function (targetAction) {
        this.targetAction = targetAction;
        return this;
    };
    BuffEntryModel.prototype.getPriority = function () {
        return this.priority;
    };
    BuffEntryModel.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    BuffEntryModel.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    BuffEntryModel.prototype.getApplyPeriodScheduleEventId = function () {
        return this.applyPeriodScheduleEventId;
    };
    BuffEntryModel.prototype.setApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    BuffEntryModel.prototype.withApplyPeriodScheduleEventId = function (applyPeriodScheduleEventId) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    };
    BuffEntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffEntryModel()
            .withBuffEntryModelId(data["buffEntryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExpression(data["expression"])
            .withTargetType(data["targetType"])
            .withTargetModel(Gs2Buff.BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(Gs2Buff.BuffTargetAction.fromDict(data["targetAction"]))
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"]);
    };
    BuffEntryModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "buffEntryModelId": this.getBuffEntryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "expression": this.getExpression(),
            "targetType": this.getTargetType(),
            "targetModel": (_a = this.getTargetModel()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "targetAction": (_b = this.getTargetAction()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "priority": this.getPriority(),
            "applyPeriodScheduleEventId": this.getApplyPeriodScheduleEventId(),
        };
    };
    return BuffEntryModel;
}());
exports.default = BuffEntryModel;
//# sourceMappingURL=BuffEntryModel.js.map