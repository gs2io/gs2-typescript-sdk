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
var GetSalesItemGroupMasterRequest = /** @class */ (function () {
    function GetSalesItemGroupMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.salesItemGroupName = null;
    }
    GetSalesItemGroupMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSalesItemGroupMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSalesItemGroupMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSalesItemGroupMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.getSalesItemGroupName = function () {
        return this.salesItemGroupName;
    };
    GetSalesItemGroupMasterRequest.prototype.setSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    GetSalesItemGroupMasterRequest.prototype.withSalesItemGroupName = function (salesItemGroupName) {
        this.salesItemGroupName = salesItemGroupName;
        return this;
    };
    GetSalesItemGroupMasterRequest.fromDict = function (data) {
        return new GetSalesItemGroupMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSalesItemGroupName(data["salesItemGroupName"]);
    };
    GetSalesItemGroupMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "salesItemGroupName": this.getSalesItemGroupName(),
        };
    };
    return GetSalesItemGroupMasterRequest;
}());
exports.default = GetSalesItemGroupMasterRequest;
//# sourceMappingURL=GetSalesItemGroupMasterRequest.js.map