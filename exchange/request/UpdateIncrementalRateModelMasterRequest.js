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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var UpdateIncrementalRateModelMasterRequest = /** @class */ (function () {
    function UpdateIncrementalRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
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
    }
    UpdateIncrementalRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getConsumeAction = function () {
        return this.consumeAction;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getCalculateType = function () {
        return this.calculateType;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getBaseValue = function () {
        return this.baseValue;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getCoefficientValue = function () {
        return this.coefficientValue;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getCalculateScriptId = function () {
        return this.calculateScriptId;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getExchangeCountId = function () {
        return this.exchangeCountId;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getMaximumExchangeCount = function () {
        return this.maximumExchangeCount;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withMaximumExchangeCount = function (maximumExchangeCount) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateIncrementalRateModelMasterRequest.fromDict = function (data) {
        return new UpdateIncrementalRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeAction(Gs2Exchange.ConsumeAction.fromDict(data["consumeAction"]))
            .withCalculateType(data["calculateType"])
            .withBaseValue(data["baseValue"])
            .withCoefficientValue(data["coefficientValue"])
            .withCalculateScriptId(data["calculateScriptId"])
            .withExchangeCountId(data["exchangeCountId"])
            .withMaximumExchangeCount(data["maximumExchangeCount"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Exchange.AcquireAction.fromDict(item);
            }) : []);
    };
    UpdateIncrementalRateModelMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
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
        };
    };
    return UpdateIncrementalRateModelMasterRequest;
}());
exports.default = UpdateIncrementalRateModelMasterRequest;
//# sourceMappingURL=UpdateIncrementalRateModelMasterRequest.js.map