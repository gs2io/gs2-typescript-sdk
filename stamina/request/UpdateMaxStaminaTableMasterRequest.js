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
var UpdateMaxStaminaTableMasterRequest = /** @class */ (function () {
    function UpdateMaxStaminaTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.maxStaminaTableName = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    UpdateMaxStaminaTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateMaxStaminaTableMasterRequest.fromDict = function (data) {
        return new UpdateMaxStaminaTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMaxStaminaTableName(data["maxStaminaTableName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    UpdateMaxStaminaTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateMaxStaminaTableMasterRequest;
}());
exports.default = UpdateMaxStaminaTableMasterRequest;
//# sourceMappingURL=UpdateMaxStaminaTableMasterRequest.js.map