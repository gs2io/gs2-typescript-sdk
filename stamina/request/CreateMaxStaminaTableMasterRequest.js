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
var CreateMaxStaminaTableMasterRequest = /** @class */ (function () {
    function CreateMaxStaminaTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    CreateMaxStaminaTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    CreateMaxStaminaTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    CreateMaxStaminaTableMasterRequest.fromDict = function (data) {
        return new CreateMaxStaminaTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    CreateMaxStaminaTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateMaxStaminaTableMasterRequest;
}());
exports.default = CreateMaxStaminaTableMasterRequest;
//# sourceMappingURL=CreateMaxStaminaTableMasterRequest.js.map