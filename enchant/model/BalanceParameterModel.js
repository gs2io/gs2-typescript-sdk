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
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:model:balance:{parameterName}";
var BalanceParameterModel = /** @class */ (function () {
    function BalanceParameterModel() {
        this.balanceParameterModelId = null;
        this.name = null;
        this.metadata = null;
        this.totalValue = null;
        this.initialValueStrategy = null;
        this.parameters = null;
    }
    BalanceParameterModel.getRegion = function (grn) {
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
    BalanceParameterModel.getOwnerId = function (grn) {
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
    BalanceParameterModel.getNamespaceName = function (grn) {
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
    BalanceParameterModel.getParameterName = function (grn) {
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
    BalanceParameterModel.isValid = function (grn) {
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
    BalanceParameterModel.createGrn = function (region, ownerId, namespaceName, parameterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '');
    };
    BalanceParameterModel.prototype.getBalanceParameterModelId = function () {
        return this.balanceParameterModelId;
    };
    BalanceParameterModel.prototype.setBalanceParameterModelId = function (balanceParameterModelId) {
        this.balanceParameterModelId = balanceParameterModelId;
        return this;
    };
    BalanceParameterModel.prototype.withBalanceParameterModelId = function (balanceParameterModelId) {
        this.balanceParameterModelId = balanceParameterModelId;
        return this;
    };
    BalanceParameterModel.prototype.getName = function () {
        return this.name;
    };
    BalanceParameterModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BalanceParameterModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    BalanceParameterModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BalanceParameterModel.prototype.getTotalValue = function () {
        return this.totalValue;
    };
    BalanceParameterModel.prototype.setTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    BalanceParameterModel.prototype.withTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    BalanceParameterModel.prototype.getInitialValueStrategy = function () {
        return this.initialValueStrategy;
    };
    BalanceParameterModel.prototype.setInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    BalanceParameterModel.prototype.withInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    BalanceParameterModel.prototype.getParameters = function () {
        return this.parameters;
    };
    BalanceParameterModel.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    BalanceParameterModel.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    BalanceParameterModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterModel()
            .withBalanceParameterModelId(data["balanceParameterModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return Gs2Enchant.BalanceParameterValueModel.fromDict(item);
            }) : null);
    };
    BalanceParameterModel.prototype.toDict = function () {
        return {
            "balanceParameterModelId": this.getBalanceParameterModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BalanceParameterModel;
}());
exports.default = BalanceParameterModel;
//# sourceMappingURL=BalanceParameterModel.js.map