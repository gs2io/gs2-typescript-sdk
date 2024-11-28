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
var Gs2Enchant = tslib_1.__importStar(require("../../enchant/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:rarity:{parameterName}";
var RarityParameterModel = /** @class */ (function () {
    function RarityParameterModel() {
        this.rarityParameterModelId = null;
        this.name = null;
        this.metadata = null;
        this.maximumParameterCount = null;
        this.parameterCounts = null;
        this.parameters = null;
    }
    RarityParameterModel.getRegion = function (grn) {
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
    RarityParameterModel.getOwnerId = function (grn) {
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
    RarityParameterModel.getNamespaceName = function (grn) {
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
    RarityParameterModel.getParameterName = function (grn) {
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
    RarityParameterModel.isValid = function (grn) {
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
    RarityParameterModel.createGrn = function (region, ownerId, namespaceName, parameterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '');
    };
    RarityParameterModel.prototype.getRarityParameterModelId = function () {
        return this.rarityParameterModelId;
    };
    RarityParameterModel.prototype.setRarityParameterModelId = function (rarityParameterModelId) {
        this.rarityParameterModelId = rarityParameterModelId;
        return this;
    };
    RarityParameterModel.prototype.withRarityParameterModelId = function (rarityParameterModelId) {
        this.rarityParameterModelId = rarityParameterModelId;
        return this;
    };
    RarityParameterModel.prototype.getName = function () {
        return this.name;
    };
    RarityParameterModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RarityParameterModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RarityParameterModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RarityParameterModel.prototype.getMaximumParameterCount = function () {
        return this.maximumParameterCount;
    };
    RarityParameterModel.prototype.setMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    RarityParameterModel.prototype.withMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    RarityParameterModel.prototype.getParameterCounts = function () {
        return this.parameterCounts;
    };
    RarityParameterModel.prototype.setParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    RarityParameterModel.prototype.withParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    RarityParameterModel.prototype.getParameters = function () {
        return this.parameters;
    };
    RarityParameterModel.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    RarityParameterModel.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    RarityParameterModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterModel()
            .withRarityParameterModelId(data["rarityParameterModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMaximumParameterCount(data["maximumParameterCount"])
            .withParameterCounts(data.parameterCounts ?
            data.parameterCounts.map(function (item) {
                return Gs2Enchant.RarityParameterCountModel.fromDict(item);
            }) : null)
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return Gs2Enchant.RarityParameterValueModel.fromDict(item);
            }) : null);
    };
    RarityParameterModel.prototype.toDict = function () {
        return {
            "rarityParameterModelId": this.getRarityParameterModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "maximumParameterCount": this.getMaximumParameterCount(),
            "parameterCounts": this.getParameterCounts() ?
                this.getParameterCounts().map(function (item) {
                    return item.toDict();
                }) : null,
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return RarityParameterModel;
}());
exports.default = RarityParameterModel;
//# sourceMappingURL=RarityParameterModel.js.map