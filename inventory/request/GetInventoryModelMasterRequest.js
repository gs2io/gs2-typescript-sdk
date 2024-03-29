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
var GetInventoryModelMasterRequest = /** @class */ (function () {
    function GetInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    GetInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetInventoryModelMasterRequest.fromDict = function (data) {
        return new GetInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    GetInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return GetInventoryModelMasterRequest;
}());
exports.default = GetInventoryModelMasterRequest;
//# sourceMappingURL=GetInventoryModelMasterRequest.js.map