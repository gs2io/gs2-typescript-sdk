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
var UpdateRecoverValueTableMasterRequest = /** @class */ (function () {
    function UpdateRecoverValueTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.recoverValueTableName = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    UpdateRecoverValueTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getRecoverValueTableName = function () {
        return this.recoverValueTableName;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withRecoverValueTableName = function (recoverValueTableName) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    UpdateRecoverValueTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateRecoverValueTableMasterRequest.fromDict = function (data) {
        return new UpdateRecoverValueTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRecoverValueTableName(data["recoverValueTableName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    UpdateRecoverValueTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateRecoverValueTableMasterRequest;
}());
exports.default = UpdateRecoverValueTableMasterRequest;
//# sourceMappingURL=UpdateRecoverValueTableMasterRequest.js.map