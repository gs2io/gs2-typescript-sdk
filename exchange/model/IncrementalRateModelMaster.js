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
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:incremental:model:{rateName}";
var IncrementalRateModelMaster = /** @class */ (function () {
    function IncrementalRateModelMaster() {
        this.incrementalRateModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.consumeAction = null;
        this.calculateType = null;
        this.baseValue = null;
        this.coefficientValue = null;
        this.calculateScriptId = null;
        this.exchangeCountId = null;
        this.maximumExchangeCount = null;
        this.acquireActions = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    IncrementalRateModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IncrementalRateModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IncrementalRateModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IncrementalRateModelMaster.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    IncrementalRateModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    };
    IncrementalRateModelMaster.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    IncrementalRateModelMaster.prototype.getIncrementalRateModelId = function () {
        return this.incrementalRateModelId;
    };
    IncrementalRateModelMaster.prototype.setIncrementalRateModelId = function (incrementalRateModelId) {
        this.incrementalRateModelId = incrementalRateModelId;
        return this;
    };
    IncrementalRateModelMaster.prototype.withIncrementalRateModelId = function (incrementalRateModelId) {
        this.incrementalRateModelId = incrementalRateModelId;
        return this;
    };
    IncrementalRateModelMaster.prototype.getName = function () {
        return this.name;
    };
    IncrementalRateModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    IncrementalRateModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    IncrementalRateModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    IncrementalRateModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    IncrementalRateModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    IncrementalRateModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    IncrementalRateModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IncrementalRateModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IncrementalRateModelMaster.prototype.getConsumeAction = function () {
        return this.consumeAction;
    };
    IncrementalRateModelMaster.prototype.setConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    IncrementalRateModelMaster.prototype.withConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    IncrementalRateModelMaster.prototype.getCalculateType = function () {
        return this.calculateType;
    };
    IncrementalRateModelMaster.prototype.setCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    IncrementalRateModelMaster.prototype.withCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    IncrementalRateModelMaster.prototype.getBaseValue = function () {
        return this.baseValue;
    };
    IncrementalRateModelMaster.prototype.setBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    IncrementalRateModelMaster.prototype.withBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    IncrementalRateModelMaster.prototype.getCoefficientValue = function () {
        return this.coefficientValue;
    };
    IncrementalRateModelMaster.prototype.setCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    IncrementalRateModelMaster.prototype.withCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    IncrementalRateModelMaster.prototype.getCalculateScriptId = function () {
        return this.calculateScriptId;
    };
    IncrementalRateModelMaster.prototype.setCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    IncrementalRateModelMaster.prototype.withCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    IncrementalRateModelMaster.prototype.getExchangeCountId = function () {
        return this.exchangeCountId;
    };
    IncrementalRateModelMaster.prototype.setExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    IncrementalRateModelMaster.prototype.withExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    IncrementalRateModelMaster.prototype.getMaximumExchangeCount = function () {
        return this.maximumExchangeCount;
    };
    IncrementalRateModelMaster.prototype.setMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    IncrementalRateModelMaster.prototype.withMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    IncrementalRateModelMaster.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    IncrementalRateModelMaster.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    IncrementalRateModelMaster.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    IncrementalRateModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    IncrementalRateModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IncrementalRateModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    IncrementalRateModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    IncrementalRateModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    IncrementalRateModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    IncrementalRateModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IncrementalRateModelMaster()
            .withIncrementalRateModelId(data["incrementalRateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeAction(ConsumeAction_1.default.fromDict(data["consumeAction"]))
            .withCalculateType(data["calculateType"])
            .withBaseValue(data["baseValue"])
            .withCoefficientValue(data["coefficientValue"])
            .withCalculateScriptId(data["calculateScriptId"])
            .withExchangeCountId(data["exchangeCountId"])
            .withMaximumExchangeCount(data["maximumExchangeCount"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    IncrementalRateModelMaster.prototype.toDict = function () {
        var _a;
        return {
            "incrementalRateModelId": this.getIncrementalRateModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeAction": (_a = this.getConsumeAction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "calculateType": this.getCalculateType(),
            "baseValue": this.getBaseValue(),
            "coefficientValue": this.getCoefficientValue(),
            "calculateScriptId": this.getCalculateScriptId(),
            "exchangeCountId": this.getExchangeCountId(),
            "maximumExchangeCount": this.getMaximumExchangeCount(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return IncrementalRateModelMaster;
}());
exports.default = IncrementalRateModelMaster;
//# sourceMappingURL=IncrementalRateModelMaster.js.map