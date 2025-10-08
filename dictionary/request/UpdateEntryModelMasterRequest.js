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
var UpdateEntryModelMasterRequest = /** @class */ (function () {
    function UpdateEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.entryName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.getEntryName = function () {
        return this.entryName;
    };
    UpdateEntryModelMasterRequest.prototype.setEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateEntryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateEntryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateEntryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateEntryModelMasterRequest.fromDict = function (data) {
        return new UpdateEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEntryName(data["entryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "entryName": this.getEntryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateEntryModelMasterRequest;
}());
exports.default = UpdateEntryModelMasterRequest;
//# sourceMappingURL=UpdateEntryModelMasterRequest.js.map