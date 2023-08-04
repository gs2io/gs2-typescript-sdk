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
var IncrementalRateModel = /** @class */ (function () {
    function IncrementalRateModel() {
        this.incrementalRateModelId = null;
        this.name = null;
        this.metadata = null;
        this.consumeAction = null;
        this.calculateType = null;
        this.baseValue = null;
        this.coefficientValue = null;
        this.calculateScriptId = null;
        this.exchangeCountId = null;
        this.maximumExchangeCount = null;
        this.acquireActions = null;
    }
    IncrementalRateModel.getRegion = function (grn) {
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
    IncrementalRateModel.getOwnerId = function (grn) {
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
    IncrementalRateModel.getNamespaceName = function (grn) {
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
    IncrementalRateModel.getRateName = function (grn) {
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
    IncrementalRateModel.isValid = function (grn) {
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
    IncrementalRateModel.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    IncrementalRateModel.prototype.getIncrementalRateModelId = function () {
        return this.incrementalRateModelId;
    };
    IncrementalRateModel.prototype.setIncrementalRateModelId = function (incrementalRateModelId) {
        this.incrementalRateModelId = incrementalRateModelId;
        return this;
    };
    IncrementalRateModel.prototype.withIncrementalRateModelId = function (incrementalRateModelId) {
        this.incrementalRateModelId = incrementalRateModelId;
        return this;
    };
    IncrementalRateModel.prototype.getName = function () {
        return this.name;
    };
    IncrementalRateModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    IncrementalRateModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    IncrementalRateModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    IncrementalRateModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IncrementalRateModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IncrementalRateModel.prototype.getConsumeAction = function () {
        return this.consumeAction;
    };
    IncrementalRateModel.prototype.setConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    IncrementalRateModel.prototype.withConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    IncrementalRateModel.prototype.getCalculateType = function () {
        return this.calculateType;
    };
    IncrementalRateModel.prototype.setCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    IncrementalRateModel.prototype.withCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    IncrementalRateModel.prototype.getBaseValue = function () {
        return this.baseValue;
    };
    IncrementalRateModel.prototype.setBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    IncrementalRateModel.prototype.withBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    IncrementalRateModel.prototype.getCoefficientValue = function () {
        return this.coefficientValue;
    };
    IncrementalRateModel.prototype.setCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    IncrementalRateModel.prototype.withCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    IncrementalRateModel.prototype.getCalculateScriptId = function () {
        return this.calculateScriptId;
    };
    IncrementalRateModel.prototype.setCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    IncrementalRateModel.prototype.withCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    IncrementalRateModel.prototype.getExchangeCountId = function () {
        return this.exchangeCountId;
    };
    IncrementalRateModel.prototype.setExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    IncrementalRateModel.prototype.withExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    IncrementalRateModel.prototype.getMaximumExchangeCount = function () {
        return this.maximumExchangeCount;
    };
    IncrementalRateModel.prototype.setMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    IncrementalRateModel.prototype.withMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    IncrementalRateModel.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    IncrementalRateModel.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    IncrementalRateModel.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    IncrementalRateModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IncrementalRateModel()
            .withIncrementalRateModelId(data["incrementalRateModelId"])
            .withName(data["name"])
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
            }) : []);
    };
    IncrementalRateModel.prototype.toDict = function () {
        var _a;
        return {
            "incrementalRateModelId": this.getIncrementalRateModelId(),
            "name": this.getName(),
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
        };
    };
    return IncrementalRateModel;
}());
exports.default = IncrementalRateModel;
//# sourceMappingURL=IncrementalRateModel.js.map