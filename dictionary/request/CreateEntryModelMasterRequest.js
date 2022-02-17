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
var CreateEntryModelMasterRequest = /** @class */ (function () {
    function CreateEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
    }
    CreateEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateEntryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateEntryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateEntryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateEntryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateEntryModelMasterRequest.fromDict = function (data) {
        return new CreateEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    CreateEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return CreateEntryModelMasterRequest;
}());
export default CreateEntryModelMasterRequest;
//# sourceMappingURL=CreateEntryModelMasterRequest.js.map