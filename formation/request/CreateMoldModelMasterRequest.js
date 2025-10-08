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
var CreateMoldModelMasterRequest = /** @class */ (function () {
    function CreateMoldModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.formModelName = null;
        this.initialMaxCapacity = null;
        this.maxCapacity = null;
    }
    CreateMoldModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateMoldModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateMoldModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateMoldModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateMoldModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateMoldModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateMoldModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    CreateMoldModelMasterRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getInitialMaxCapacity = function () {
        return this.initialMaxCapacity;
    };
    CreateMoldModelMasterRequest.prototype.setInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    CreateMoldModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateMoldModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    CreateMoldModelMasterRequest.fromDict = function (data) {
        return new CreateMoldModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withFormModelName(data["formModelName"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"]);
    };
    CreateMoldModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "formModelName": this.getFormModelName(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
        };
    };
    return CreateMoldModelMasterRequest;
}());
exports.default = CreateMoldModelMasterRequest;
//# sourceMappingURL=CreateMoldModelMasterRequest.js.map