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
var CreateBalanceParameterModelMasterRequest = /** @class */ (function () {
    function CreateBalanceParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.totalValue = null;
        this.initialValueStrategy = null;
        this.parameters = null;
    }
    CreateBalanceParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getTotalValue = function () {
        return this.totalValue;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withTotalValue = function (totalValue) {
        this.totalValue = totalValue;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getInitialValueStrategy = function () {
        return this.initialValueStrategy;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withInitialValueStrategy = function (initialValueStrategy) {
        this.initialValueStrategy = initialValueStrategy;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.getParameters = function () {
        return this.parameters;
    };
    CreateBalanceParameterModelMasterRequest.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    CreateBalanceParameterModelMasterRequest.fromDict = function (data) {
        return new CreateBalanceParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTotalValue(data["totalValue"])
            .withInitialValueStrategy(data["initialValueStrategy"])
            .withParameters(data.parameters ?
            data.parameters.map(function (item) {
                return Gs2Enchant.BalanceParameterValueModel.fromDict(item);
            }) : []);
    };
    CreateBalanceParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "totalValue": this.getTotalValue(),
            "initialValueStrategy": this.getInitialValueStrategy(),
            "parameters": this.getParameters() ?
                this.getParameters().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreateBalanceParameterModelMasterRequest;
}());
exports.default = CreateBalanceParameterModelMasterRequest;
//# sourceMappingURL=CreateBalanceParameterModelMasterRequest.js.map