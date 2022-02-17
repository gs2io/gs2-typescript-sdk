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
var CreateThresholdMasterRequest = /** @class */ (function () {
    function CreateThresholdMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.values = null;
    }
    CreateThresholdMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateThresholdMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateThresholdMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateThresholdMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateThresholdMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateThresholdMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateThresholdMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateThresholdMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    CreateThresholdMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    CreateThresholdMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    CreateThresholdMasterRequest.fromDict = function (data) {
        return new CreateThresholdMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : []);
    };
    CreateThresholdMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateThresholdMasterRequest;
}());
exports.default = CreateThresholdMasterRequest;
//# sourceMappingURL=CreateThresholdMasterRequest.js.map