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
var RarityParameterCountModel_1 = tslib_1.__importDefault(require("./RarityParameterCountModel"));
var RarityParameterValueModel_1 = tslib_1.__importDefault(require("./RarityParameterValueModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:rarity:{parameterName}";
var RarityParameterModelMaster = /** @class */ (function () {
    function RarityParameterModelMaster() {
        this.rarityParameterModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.maximumParameterCount = null;
        this.parameterCounts = null;
        this.parameters = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    RarityParameterModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{parameterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{parameterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{parameterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterModelMaster.getParameterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{parameterName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RarityParameterModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getParameterName(grn) == null || this.getParameterName(grn) === '') {
            return false;
        }
        return true;
    };
    RarityParameterModelMaster.createGrn = function (region, ownerId, namespaceName, parameterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '');
    };
    RarityParameterModelMaster.prototype.getRarityParameterModelId = function () {
        return this.rarityParameterModelId;
    };
    RarityParameterModelMaster.prototype.setRarityParameterModelId = function (rarityParameterModelId) {
        this.rarityParameterModelId = rarityParameterModelId;
        return this;
    };
    RarityParameterModelMaster.prototype.withRarityParameterModelId = function (rarityParameterModelId) {
        this.rarityParameterModelId = rarityParameterModelId;
        return this;
    };
    RarityParameterModelMaster.prototype.getName = function () {
        return this.name;
    };
    RarityParameterModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    RarityParameterModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RarityParameterModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RarityParameterModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RarityParameterModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterModelMaster.prototype.getMaximumParameterCount = function () {
        return this.maximumParameterCount;
    };
    RarityParameterModelMaster.prototype.setMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    RarityParameterModelMaster.prototype.withMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    RarityParameterModelMaster.prototype.getParameterCounts = function () {
        return this.parameterCounts;
    };
    RarityParameterModelMaster.prototype.setParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    RarityParameterModelMaster.prototype.withParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    RarityParameterModelMaster.prototype.getParameters = function () {
        return this.parameters;
    };
    RarityParameterModelMaster.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    RarityParameterModelMaster.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    RarityParameterModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RarityParameterModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RarityParameterModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RarityParameterModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RarityParameterModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RarityParameterModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RarityParameterModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    RarityParameterModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RarityParameterModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RarityParameterModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterModelMaster()
            .withRarityParameterModelId(data["rarityParameterModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMaximumParameterCount(data["maximumParameterCount"])
            .withParameterCounts(data.parameterCounts ?
            data.parameterCounts.map(function (item) {
                return RarityParameterCountModel_1.default.fromDict(item);
            }) : [])
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return RarityParameterValueModel_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    RarityParameterModelMaster.prototype.toDict = function () {
        return {
            "rarityParameterModelId": this.getRarityParameterModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "maximumParameterCount": this.getMaximumParameterCount(),
            "parameterCounts": this.getParameterCounts() ?
                this.getParameterCounts().map(function (item) {
                    return item.toDict();
                }) : [],
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return RarityParameterModelMaster;
}());
exports.default = RarityParameterModelMaster;
//# sourceMappingURL=RarityParameterModelMaster.js.map