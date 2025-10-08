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
var UpdateRarityParameterModelMasterRequest = /** @class */ (function () {
    function UpdateRarityParameterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.parameterName = null;
        this.description = null;
        this.metadata = null;
        this.maximumParameterCount = null;
        this.parameterCounts = null;
        this.parameters = null;
    }
    UpdateRarityParameterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getMaximumParameterCount = function () {
        return this.maximumParameterCount;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withMaximumParameterCount = function (maximumParameterCount) {
        this.maximumParameterCount = maximumParameterCount;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getParameterCounts = function () {
        return this.parameterCounts;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withParameterCounts = function (parameterCounts) {
        this.parameterCounts = parameterCounts;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.getParameters = function () {
        return this.parameters;
    };
    UpdateRarityParameterModelMasterRequest.prototype.setParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.prototype.withParameters = function (parameters) {
        this.parameters = parameters;
        return this;
    };
    UpdateRarityParameterModelMasterRequest.fromDict = function (data) {
        return new UpdateRarityParameterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withParameterName(data["parameterName"])
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
    UpdateRarityParameterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "parameterName": this.getParameterName(),
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
    return UpdateRarityParameterModelMasterRequest;
}());
exports.default = UpdateRarityParameterModelMasterRequest;
//# sourceMappingURL=UpdateRarityParameterModelMasterRequest.js.map