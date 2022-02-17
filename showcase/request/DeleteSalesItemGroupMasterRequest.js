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
var DeleteSalesItemGroupMasterRequest = /** @class */ (function () {
    function DeleteSalesItemGroupMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.salesItemGroupName = null;
    }
    DeleteSalesItemGroupMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSalesItemGroupMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSalesItemGroupMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteSalesItemGroupMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.getSalesItemGroupName = function () {
        return this.salesItemGroupName;
    };
    DeleteSalesItemGroupMasterRequest.prototype.setSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.prototype.withSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    DeleteSalesItemGroupMasterRequest.fromDict = function (data) {
        return new DeleteSalesItemGroupMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSalesItemGroupName(data["salesItemGroupName"]);
    };
    DeleteSalesItemGroupMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "salesItemGroupName": this.getSalesItemGroupName(),
        };
    };
    return DeleteSalesItemGroupMasterRequest;
}());
exports.default = DeleteSalesItemGroupMasterRequest;
//# sourceMappingURL=DeleteSalesItemGroupMasterRequest.js.map