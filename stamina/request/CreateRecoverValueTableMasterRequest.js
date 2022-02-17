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
var CreateRecoverValueTableMasterRequest = /** @class */ (function () {
    function CreateRecoverValueTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.experienceModelId = null;
        this.values = null;
    }
    CreateRecoverValueTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRecoverValueTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRecoverValueTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRecoverValueTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRecoverValueTableMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRecoverValueTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRecoverValueTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateRecoverValueTableMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    CreateRecoverValueTableMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    CreateRecoverValueTableMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    CreateRecoverValueTableMasterRequest.fromDict = function (data) {
        return new CreateRecoverValueTableMasterRequest()
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
    CreateRecoverValueTableMasterRequest.prototype.toDict = function () {
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
    return CreateRecoverValueTableMasterRequest;
}());
export default CreateRecoverValueTableMasterRequest;
//# sourceMappingURL=CreateRecoverValueTableMasterRequest.js.map