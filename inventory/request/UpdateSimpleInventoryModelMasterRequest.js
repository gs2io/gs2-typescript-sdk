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
var UpdateSimpleInventoryModelMasterRequest = /** @class */ (function () {
    function UpdateSimpleInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateSimpleInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSimpleInventoryModelMasterRequest.fromDict = function (data) {
        return new UpdateSimpleInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateSimpleInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateSimpleInventoryModelMasterRequest;
}());
exports.default = UpdateSimpleInventoryModelMasterRequest;
//# sourceMappingURL=UpdateSimpleInventoryModelMasterRequest.js.map