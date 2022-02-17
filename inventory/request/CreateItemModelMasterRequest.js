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
var CreateItemModelMasterRequest = /** @class */ (function () {
    function CreateItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.stackingLimit = null;
        this.allowMultipleStacks = null;
        this.sortValue = null;
    }
    CreateItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    CreateItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateItemModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getStackingLimit = function () {
        return this.stackingLimit;
    };
    CreateItemModelMasterRequest.prototype.setStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getAllowMultipleStacks = function () {
        return this.allowMultipleStacks;
    };
    CreateItemModelMasterRequest.prototype.setAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    CreateItemModelMasterRequest.prototype.getSortValue = function () {
        return this.sortValue;
    };
    CreateItemModelMasterRequest.prototype.setSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    CreateItemModelMasterRequest.prototype.withSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    CreateItemModelMasterRequest.fromDict = function (data) {
        return new CreateItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"]);
    };
    CreateItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
        };
    };
    return CreateItemModelMasterRequest;
}());
export default CreateItemModelMasterRequest;
//# sourceMappingURL=CreateItemModelMasterRequest.js.map