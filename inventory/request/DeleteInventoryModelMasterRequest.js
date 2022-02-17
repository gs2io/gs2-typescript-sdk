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
var DeleteInventoryModelMasterRequest = /** @class */ (function () {
    function DeleteInventoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    DeleteInventoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteInventoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteInventoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteInventoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DeleteInventoryModelMasterRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteInventoryModelMasterRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DeleteInventoryModelMasterRequest.fromDict = function (data) {
        return new DeleteInventoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    DeleteInventoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return DeleteInventoryModelMasterRequest;
}());
export default DeleteInventoryModelMasterRequest;
//# sourceMappingURL=DeleteInventoryModelMasterRequest.js.map