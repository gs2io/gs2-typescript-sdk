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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:recoverValueTable:{recoverValueTableName}";
var RecoverValueTable = /** @class */ (function () {
    function RecoverValueTable() {
        this.recoverValueTableId = null;
        this.name = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    RecoverValueTable.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{recoverValueTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverValueTable.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{recoverValueTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverValueTable.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{recoverValueTableName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverValueTable.getRecoverValueTableName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{recoverValueTableName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RecoverValueTable.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getRecoverValueTableName(grn) == null) {
            return false;
        }
        return true;
    };
    RecoverValueTable.createGrn = function (region, ownerId, namespaceName, recoverValueTableName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{recoverValueTableName}', recoverValueTableName !== null && recoverValueTableName !== void 0 ? recoverValueTableName : '');
    };
    RecoverValueTable.prototype.getRecoverValueTableId = function () {
        return this.recoverValueTableId;
    };
    RecoverValueTable.prototype.setRecoverValueTableId = function (recoverValueTableId) {
        this.recoverValueTableId = recoverValueTableId;
        return this;
    };
    RecoverValueTable.prototype.withRecoverValueTableId = function (recoverValueTableId) {
        this.recoverValueTableId = recoverValueTableId;
        return this;
    };
    RecoverValueTable.prototype.getName = function () {
        return this.name;
    };
    RecoverValueTable.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RecoverValueTable.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RecoverValueTable.prototype.getMetadata = function () {
        return this.metadata;
    };
    RecoverValueTable.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverValueTable.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RecoverValueTable.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RecoverValueTable.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverValueTable.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RecoverValueTable.prototype.getValues = function () {
        return this.values;
    };
    RecoverValueTable.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverValueTable.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    RecoverValueTable.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RecoverValueTable()
            .withRecoverValueTableId(data["recoverValueTableId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    RecoverValueTable.prototype.toDict = function () {
        return {
            "recoverValueTableId": this.getRecoverValueTableId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return RecoverValueTable;
}());
exports.default = RecoverValueTable;
//# sourceMappingURL=RecoverValueTable.js.map