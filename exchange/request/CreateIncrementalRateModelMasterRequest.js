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
var CreateIncrementalRateModelMasterRequest = /** @class */ (function () {
    function CreateIncrementalRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.consumeAction = null;
        this.calculateType = null;
        this.baseValue = null;
        this.coefficientValue = null;
        this.calculateScriptId = null;
        this.exchangeCountId = null;
        this.acquireActions = null;
    }
    CreateIncrementalRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getConsumeAction = function () {
        return this.consumeAction;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withConsumeAction = function (consumeAction) {
        this.consumeAction = consumeAction;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getCalculateType = function () {
        return this.calculateType;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withCalculateType = function (calculateType) {
        this.calculateType = calculateType;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getBaseValue = function () {
        return this.baseValue;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withBaseValue = function (baseValue) {
        this.baseValue = baseValue;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getCoefficientValue = function () {
        return this.coefficientValue;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withCoefficientValue = function (coefficientValue) {
        this.coefficientValue = coefficientValue;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getCalculateScriptId = function () {
        return this.calculateScriptId;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withCalculateScriptId = function (calculateScriptId) {
        this.calculateScriptId = calculateScriptId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getExchangeCountId = function () {
        return this.exchangeCountId;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withExchangeCountId = function (exchangeCountId) {
        this.exchangeCountId = exchangeCountId;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CreateIncrementalRateModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateIncrementalRateModelMasterRequest.fromDict = function (data) {
        return new CreateIncrementalRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeAction(Gs2Exchange.ConsumeAction.fromDict(data["consumeAction"]))
            .withCalculateType(data["calculateType"])
            .withBaseValue(data["baseValue"])
            .withCoefficientValue(data["coefficientValue"])
            .withCalculateScriptId(data["calculateScriptId"])
            .withExchangeCountId(data["exchangeCountId"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Exchange.AcquireAction.fromDict(item);
            }) : []);
    };
    CreateIncrementalRateModelMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeAction": (_a = this.getConsumeAction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "calculateType": this.getCalculateType(),
            "baseValue": this.getBaseValue(),
            "coefficientValue": this.getCoefficientValue(),
            "calculateScriptId": this.getCalculateScriptId(),
            "exchangeCountId": this.getExchangeCountId(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreateIncrementalRateModelMasterRequest;
}());
exports.default = CreateIncrementalRateModelMasterRequest;
//# sourceMappingURL=CreateIncrementalRateModelMasterRequest.js.map