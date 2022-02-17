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
var CreateRecoverIntervalTableMasterRequest = /** @class */ (function () {
    function CreateRecoverIntervalTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    CreateRecoverIntervalTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    CreateRecoverIntervalTableMasterRequest.fromDict = function (data) {
        return new CreateRecoverIntervalTableMasterRequest()
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
    CreateRecoverIntervalTableMasterRequest.prototype.toDict = function () {
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
    return CreateRecoverIntervalTableMasterRequest;
}());
export default CreateRecoverIntervalTableMasterRequest;
//# sourceMappingURL=CreateRecoverIntervalTableMasterRequest.js.map