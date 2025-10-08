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
var UpdateBigInventoryModelMasterRequest = /** @class */ (function () {
    function UpdateBigInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateBigInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateBigInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateBigInventoryModelMasterRequest.fromDict = function (data) {
        return new UpdateBigInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateBigInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateBigInventoryModelMasterRequest;
}());
exports.default = UpdateBigInventoryModelMasterRequest;
//# sourceMappingURL=UpdateBigInventoryModelMasterRequest.js.map