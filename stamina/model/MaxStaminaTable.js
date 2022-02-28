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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:maxStaminaTable:{maxStaminaTableName}";
var MaxStaminaTable = /** @class */ (function () {
    function MaxStaminaTable() {
        this.maxStaminaTableId = null;
        this.name = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    MaxStaminaTable.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTable.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTable.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{maxStaminaTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTable.getMaxStaminaTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{maxStaminaTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MaxStaminaTable.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getMaxStaminaTableName(grn) == null) {
            return false;
        }
        return true;
    };
    MaxStaminaTable.createGrn = function (region, ownerId, namespaceName, maxStaminaTableName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (maxStaminaTableName == null || maxStaminaTableName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{maxStaminaTableName}', maxStaminaTableName);
    };
    MaxStaminaTable.prototype.getMaxStaminaTableId = function () {
        return this.maxStaminaTableId;
    };
    MaxStaminaTable.prototype.setMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTable.prototype.withMaxStaminaTableId = function (maxStaminaTableId) {
        this.maxStaminaTableId = maxStaminaTableId;
        return this;
    };
    MaxStaminaTable.prototype.getName = function () {
        return this.name;
    };
    MaxStaminaTable.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTable.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    MaxStaminaTable.prototype.getMetadata = function () {
        return this.metadata;
    };
    MaxStaminaTable.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTable.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    MaxStaminaTable.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    MaxStaminaTable.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTable.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    MaxStaminaTable.prototype.getValues = function () {
        return this.values;
    };
    MaxStaminaTable.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTable.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    MaxStaminaTable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MaxStaminaTable()
            .withMaxStaminaTableId(data["maxStaminaTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    MaxStaminaTable.prototype.toDict = function () {
        return {
            "maxStaminaTableId": this.getMaxStaminaTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return MaxStaminaTable;
}());
exports.default = MaxStaminaTable;
//# sourceMappingURL=MaxStaminaTable.js.map