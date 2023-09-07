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
var UpdateMoldModelMasterRequest = /** @class */ (function () {
    function UpdateMoldModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldModelName = null;
        this.description = null;
        this.metadata = null;
        this.formModelName = null;
        this.initialMaxCapacity = null;
        this.maxCapacity = null;
    }
    UpdateMoldModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateMoldModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateMoldModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateMoldModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    UpdateMoldModelMasterRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateMoldModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateMoldModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    UpdateMoldModelMasterRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getInitialMaxCapacity = function () {
        return this.initialMaxCapacity;
    };
    UpdateMoldModelMasterRequest.prototype.setInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withInitialMaxCapacity = function (initialMaxCapacity) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    UpdateMoldModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateMoldModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateMoldModelMasterRequest.fromDict = function (data) {
        return new UpdateMoldModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldModelName(data["moldModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withFormModelName(data["formModelName"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"]);
    };
    UpdateMoldModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldModelName": this.getMoldModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "formModelName": this.getFormModelName(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
        };
    };
    return UpdateMoldModelMasterRequest;
}());
exports.default = UpdateMoldModelMasterRequest;
//# sourceMappingURL=UpdateMoldModelMasterRequest.js.map