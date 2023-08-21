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
var BalanceParameterValueModel_1 = tslib_1.__importDefault(require("./BalanceParameterValueModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:balance:{parameterName}";
var BalanceParameterModelMaster = /** @class */ (function () {
    function BalanceParameterModelMaster() {
        this.balanceParameterModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.totalValue = null;
        this.initialValueStrategy = null;
        this.parameters = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BalanceParameterModelMaster.getRegion = function (grn) {
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
    BalanceParameterModelMaster.getOwnerId = function (grn) {
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
    BalanceParameterModelMaster.getNamespaceName = function (grn) {
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
    BalanceParameterModelMaster.getParameterName = function (grn) {
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
    BalanceParameterModelMaster.isValid = function (grn) {
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
    BalanceParameterModelMaster.createGrn = function (region, ownerId, namespaceName, parameterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '');
    };
    BalanceParameterModelMaster.prototype.getBalanceParameterModelId = function () {
        return this.balanceParameterModelId;
    };
    BalanceParameterModelMaster.prototype.setBalanceParameterModelId = function (balanceParameterModelId) {
        this.balanceParameterModelId = balanceParameterModelId;
        return this;
    };
    BalanceParameterModelMaster.prototype.withBalanceParameterModelId = function (balanceParameterModelId) {
        this.balanceParameterModelId = balanceParameterModelId;
        return this;
    };
    BalanceParameterModelMaster.prototype.getName = function () {
        return this.name;
    };
    BalanceParameterModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    BalanceParameterModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    BalanceParameterModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    BalanceParameterModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    BalanceParameterModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterModelMaster.prototype.getTotalValue = function () {
        return this.totalValue;
    };
    BalanceParameterModelMaster.prototype.setTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    BalanceParameterModelMaster.prototype.withTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    BalanceParameterModelMaster.prototype.getInitialValueStrategy = function () {
        return this.initialValueStrategy;
    };
    BalanceParameterModelMaster.prototype.setInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    BalanceParameterModelMaster.prototype.withInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    BalanceParameterModelMaster.prototype.getParameters = function () {
        return this.parameters;
    };
    BalanceParameterModelMaster.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    BalanceParameterModelMaster.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    BalanceParameterModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BalanceParameterModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BalanceParameterModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BalanceParameterModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BalanceParameterModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BalanceParameterModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BalanceParameterModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    BalanceParameterModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BalanceParameterModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BalanceParameterModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterModelMaster()
            .withBalanceParameterModelId(data["balanceParameterModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return BalanceParameterValueModel_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BalanceParameterModelMaster.prototype.toDict = function () {
        return {
            "balanceParameterModelId": this.getBalanceParameterModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return BalanceParameterModelMaster;
}());
exports.default = BalanceParameterModelMaster;
//# sourceMappingURL=BalanceParameterModelMaster.js.map