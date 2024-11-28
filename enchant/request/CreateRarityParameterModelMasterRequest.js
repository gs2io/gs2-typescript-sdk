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
var CreateRarityParameterModelMasterRequest = /** @class */ (function () {
    function CreateRarityParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.maximumParameterCount = null;
        this.parameterCounts = null;
        this.parameters = null;
    }
    CreateRarityParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRarityParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRarityParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRarityParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRarityParameterModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRarityParameterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRarityParameterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getMaximumParameterCount = function () {
        return this.maximumParameterCount;
    };
    CreateRarityParameterModelMasterRequest.prototype.setMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getParameterCounts = function () {
        return this.parameterCounts;
    };
    CreateRarityParameterModelMasterRequest.prototype.setParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.getParameters = function () {
        return this.parameters;
    };
    CreateRarityParameterModelMasterRequest.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    CreateRarityParameterModelMasterRequest.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    CreateRarityParameterModelMasterRequest.fromDict = function (data) {
        return new CreateRarityParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
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
    CreateRarityParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
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
    return CreateRarityParameterModelMasterRequest;
}());
exports.default = CreateRarityParameterModelMasterRequest;
//# sourceMappingURL=CreateRarityParameterModelMasterRequest.js.map