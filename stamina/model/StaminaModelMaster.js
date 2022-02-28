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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}";
var StaminaModelMaster = /** @class */ (function () {
    function StaminaModelMaster() {
        this.staminaModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.recoverIntervalMinutes = null;
        this.recoverValue = null;
        this.initialCapacity = null;
        this.isOverflow = null;
        this.maxCapacity = null;
        this.maxStaminaTableName = null;
        this.recoverIntervalTableName = null;
        this.recoverValueTableName = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    StaminaModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaModelMaster.getStaminaName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getStaminaName(grn) == null || this.getStaminaName(grn) === '') {
            return false;
        }
        return true;
    };
    StaminaModelMaster.createGrn = function (region, ownerId, namespaceName, staminaName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{staminaName}', staminaName !== null && staminaName !== void 0 ? staminaName : '');
    };
    StaminaModelMaster.prototype.getStaminaModelId = function () {
        return this.staminaModelId;
    };
    StaminaModelMaster.prototype.setStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaModelMaster.prototype.withStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaModelMaster.prototype.getName = function () {
        return this.name;
    };
    StaminaModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    StaminaModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    StaminaModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    StaminaModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StaminaModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    StaminaModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    StaminaModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    StaminaModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    StaminaModelMaster.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    StaminaModelMaster.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    StaminaModelMaster.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    StaminaModelMaster.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    StaminaModelMaster.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    StaminaModelMaster.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    StaminaModelMaster.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    StaminaModelMaster.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    StaminaModelMaster.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    StaminaModelMaster.prototype.getIsOverflow = function () {
        return this.isOverflow;
    };
    StaminaModelMaster.prototype.setIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    StaminaModelMaster.prototype.withIsOverflow = function (isOverflow) {
        this.isOverflow = isOverflow;
        return this;
    };
    StaminaModelMaster.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    StaminaModelMaster.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    StaminaModelMaster.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    StaminaModelMaster.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    StaminaModelMaster.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    StaminaModelMaster.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    StaminaModelMaster.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    StaminaModelMaster.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    StaminaModelMaster.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    StaminaModelMaster.prototype.getRecoverValueTableName = function () {
        return this.recoverValueTableName;
    };
    StaminaModelMaster.prototype.setRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    StaminaModelMaster.prototype.withRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    StaminaModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    StaminaModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StaminaModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StaminaModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    StaminaModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StaminaModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StaminaModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaModelMaster()
            .withStaminaModelId(data["staminaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTableName(data["maxStaminaTableName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"])
            .withRecoverValueTableName(data["recoverValueTableName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    StaminaModelMaster.prototype.toDict = function () {
        return {
            "staminaModelId": this.getStaminaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return StaminaModelMaster;
}());
exports.default = StaminaModelMaster;
//# sourceMappingURL=StaminaModelMaster.js.map