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
var CreateSalesItemGroupMasterRequest = /** @class */ (function () {
    function CreateSalesItemGroupMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.salesItemNames = null;
    }
    CreateSalesItemGroupMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSalesItemGroupMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSalesItemGroupMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSalesItemGroupMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSalesItemGroupMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSalesItemGroupMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSalesItemGroupMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.getSalesItemNames = function () {
        return this.salesItemNames;
    };
    CreateSalesItemGroupMasterRequest.prototype.setSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    CreateSalesItemGroupMasterRequest.prototype.withSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    CreateSalesItemGroupMasterRequest.fromDict = function (data) {
        return new CreateSalesItemGroupMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesItemNames(data.salesItemNames ?
            data.salesItemNames.map(function (item) {
                return item;
            }) : []);
    };
    CreateSalesItemGroupMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesItemNames": this.getSalesItemNames() ?
                this.getSalesItemNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateSalesItemGroupMasterRequest;
}());
export default CreateSalesItemGroupMasterRequest;
//# sourceMappingURL=CreateSalesItemGroupMasterRequest.js.map