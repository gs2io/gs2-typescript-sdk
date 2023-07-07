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
var DescribeSimpleItemModelsRequest = /** @class */ (function () {
    function DescribeSimpleItemModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    DescribeSimpleItemModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSimpleItemModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSimpleItemModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSimpleItemModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeSimpleItemModelsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemModelsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeSimpleItemModelsRequest.fromDict = function (data) {
        return new DescribeSimpleItemModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    DescribeSimpleItemModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return DescribeSimpleItemModelsRequest;
}());
exports.default = DescribeSimpleItemModelsRequest;
//# sourceMappingURL=DescribeSimpleItemModelsRequest.js.map