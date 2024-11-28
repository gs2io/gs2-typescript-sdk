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
var UpdateThresholdMasterRequest = /** @class */ (function () {
    function UpdateThresholdMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.thresholdName = null;
        this.description = null;
        this.metadata = null;
        this.values = null;
    }
    UpdateThresholdMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateThresholdMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateThresholdMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateThresholdMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getThresholdName = function () {
        return this.thresholdName;
    };
    UpdateThresholdMasterRequest.prototype.setThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateThresholdMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateThresholdMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.getValues = function () {
        return this.values;
    };
    UpdateThresholdMasterRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateThresholdMasterRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    UpdateThresholdMasterRequest.fromDict = function (data) {
        return new UpdateThresholdMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withThresholdName(data["thresholdName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return item;
            }) : null);
    };
    UpdateThresholdMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "thresholdName": this.getThresholdName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return UpdateThresholdMasterRequest;
}());
exports.default = UpdateThresholdMasterRequest;
//# sourceMappingURL=UpdateThresholdMasterRequest.js.map