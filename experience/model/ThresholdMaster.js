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
var grnFormat = "grn:gs2:{region}:{ownerId}:experience:{namespaceName}:threshold:{thresholdName}";
var ThresholdMaster = /** @class */ (function () {
    function ThresholdMaster() {
        this.thresholdId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.values = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    ThresholdMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{thresholdName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ThresholdMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{thresholdName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ThresholdMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{thresholdName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ThresholdMaster.getThresholdName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{thresholdName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ThresholdMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getThresholdName(grn) == null) {
            return false;
        }
        return true;
    };
    ThresholdMaster.createGrn = function (region, ownerId, namespaceName, thresholdName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{thresholdName}', thresholdName !== null && thresholdName !== void 0 ? thresholdName : '');
    };
    ThresholdMaster.prototype.getThresholdId = function () {
        return this.thresholdId;
    };
    ThresholdMaster.prototype.setThresholdId = function (thresholdId) {
        this.thresholdId = thresholdId;
        return this;
    };
    ThresholdMaster.prototype.withThresholdId = function (thresholdId) {
        this.thresholdId = thresholdId;
        return this;
    };
    ThresholdMaster.prototype.getName = function () {
        return this.name;
    };
    ThresholdMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ThresholdMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ThresholdMaster.prototype.getDescription = function () {
        return this.description;
    };
    ThresholdMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    ThresholdMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ThresholdMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    ThresholdMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ThresholdMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ThresholdMaster.prototype.getValues = function () {
        return this.values;
    };
    ThresholdMaster.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    ThresholdMaster.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    ThresholdMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ThresholdMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ThresholdMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ThresholdMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ThresholdMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ThresholdMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ThresholdMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ThresholdMaster()
            .withThresholdId(data["thresholdId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ThresholdMaster.prototype.toDict = function () {
        return {
            "thresholdId": this.getThresholdId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ThresholdMaster;
}());
exports.default = ThresholdMaster;
//# sourceMappingURL=ThresholdMaster.js.map