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
var UpdateSalesItemGroupMasterRequest = /** @class */ (function () {
    function UpdateSalesItemGroupMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.salesItemGroupName = null;
        this.description = null;
        this.metadata = null;
        this.salesItemNames = null;
    }
    UpdateSalesItemGroupMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getSalesItemGroupName = function () {
        return this.salesItemGroupName;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.getSalesItemNames = function () {
        return this.salesItemNames;
    };
    UpdateSalesItemGroupMasterRequest.prototype.setSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.prototype.withSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    UpdateSalesItemGroupMasterRequest.fromDict = function (data) {
        return new UpdateSalesItemGroupMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSalesItemGroupName(data["salesItemGroupName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesItemNames(data.salesItemNames ?
            data.salesItemNames.map(function (item) {
                return item;
            }) : []);
    };
    UpdateSalesItemGroupMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "salesItemGroupName": this.getSalesItemGroupName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesItemNames": this.getSalesItemNames() ?
                this.getSalesItemNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateSalesItemGroupMasterRequest;
}());
exports.default = UpdateSalesItemGroupMasterRequest;
//# sourceMappingURL=UpdateSalesItemGroupMasterRequest.js.map