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
var UpdateRecoverIntervalTableMasterRequest = /** @class */ (function () {
    function UpdateRecoverIntervalTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.recoverIntervalTableName = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    UpdateRecoverIntervalTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateRecoverIntervalTableMasterRequest.fromDict = function (data) {
        return new UpdateRecoverIntervalTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withExperienceModelId(data["experienceModelId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    UpdateRecoverIntervalTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "experienceModelId": this.getExperienceModelId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateRecoverIntervalTableMasterRequest;
}());
export default UpdateRecoverIntervalTableMasterRequest;
//# sourceMappingURL=UpdateRecoverIntervalTableMasterRequest.js.map