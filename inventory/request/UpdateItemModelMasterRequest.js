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
var UpdateItemModelMasterRequest = /** @class */ (function () {
    function UpdateItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.itemName = null;
        this.description = null;
        this.metadata = null;
        this.stackingLimit = null;
        this.allowMultipleStacks = null;
        this.sortValue = null;
    }
    UpdateItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateItemModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getItemName = function () {
        return this.itemName;
    };
    UpdateItemModelMasterRequest.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateItemModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateItemModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getStackingLimit = function () {
        return this.stackingLimit;
    };
    UpdateItemModelMasterRequest.prototype.setStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withStackingLimit = function (stackingLimit) {
        this.stackingLimit = stackingLimit;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getAllowMultipleStacks = function () {
        return this.allowMultipleStacks;
    };
    UpdateItemModelMasterRequest.prototype.setAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withAllowMultipleStacks = function (allowMultipleStacks) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.getSortValue = function () {
        return this.sortValue;
    };
    UpdateItemModelMasterRequest.prototype.setSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    UpdateItemModelMasterRequest.prototype.withSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    UpdateItemModelMasterRequest.fromDict = function (data) {
        return new UpdateItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"]);
    };
    UpdateItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
        };
    };
    return UpdateItemModelMasterRequest;
}());
export default UpdateItemModelMasterRequest;
//# sourceMappingURL=UpdateItemModelMasterRequest.js.map