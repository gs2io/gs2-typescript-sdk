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
var UpdateInventoryModelMasterRequest = /** @class */ (function () {
    function UpdateInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.description = null;
        this.metadata = null;
        this.initialCapacity = null;
        this.maxCapacity = null;
        this.protectReferencedItem = null;
    }
    UpdateInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getInitialCapacity = function () {
        return this.initialCapacity;
    };
    UpdateInventoryModelMasterRequest.prototype.setInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withInitialCapacity = function (initialCapacity) {
        this.initialCapacity = initialCapacity;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getMaxCapacity = function () {
        return this.maxCapacity;
    };
    UpdateInventoryModelMasterRequest.prototype.setMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withMaxCapacity = function (maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.getProtectReferencedItem = function () {
        return this.protectReferencedItem;
    };
    UpdateInventoryModelMasterRequest.prototype.setProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    UpdateInventoryModelMasterRequest.prototype.withProtectReferencedItem = function (protectReferencedItem) {
        this.protectReferencedItem = protectReferencedItem;
        return this;
    };
    UpdateInventoryModelMasterRequest.fromDict = function (data) {
        return new UpdateInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInitialCapacity(data["initialCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withProtectReferencedItem(data["protectReferencedItem"]);
    };
    UpdateInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "initialCapacity": this.getInitialCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "protectReferencedItem": this.getProtectReferencedItem(),
        };
    };
    return UpdateInventoryModelMasterRequest;
}());
export default UpdateInventoryModelMasterRequest;
//# sourceMappingURL=UpdateInventoryModelMasterRequest.js.map