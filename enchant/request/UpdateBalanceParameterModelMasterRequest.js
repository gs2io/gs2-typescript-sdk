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
var Gs2Enchant = tslib_1.__importStar(require("../model"));
var UpdateBalanceParameterModelMasterRequest = /** @class */ (function () {
    function UpdateBalanceParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
        this.description = null;
        this.metadata = null;
        this.totalValue = null;
        this.initialValueStrategy = null;
        this.parameters = null;
    }
    UpdateBalanceParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getTotalValue = function () {
        return this.totalValue;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getInitialValueStrategy = function () {
        return this.initialValueStrategy;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.getParameters = function () {
        return this.parameters;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    UpdateBalanceParameterModelMasterRequest.fromDict = function (data) {
        return new UpdateBalanceParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return Gs2Enchant.BalanceParameterValueModel.fromDict(item);
            }) : null);
    };
    UpdateBalanceParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return UpdateBalanceParameterModelMasterRequest;
}());
exports.default = UpdateBalanceParameterModelMasterRequest;
//# sourceMappingURL=UpdateBalanceParameterModelMasterRequest.js.map