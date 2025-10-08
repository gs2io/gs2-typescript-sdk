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
var GetBigInventoryModelMasterRequest = /** @class */ (function () {
    function GetBigInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    GetBigInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBigInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBigInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBigInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    GetBigInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    GetBigInventoryModelMasterRequest.fromDict = function (data) {
        return new GetBigInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    GetBigInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return GetBigInventoryModelMasterRequest;
}());
exports.default = GetBigInventoryModelMasterRequest;
//# sourceMappingURL=GetBigInventoryModelMasterRequest.js.map