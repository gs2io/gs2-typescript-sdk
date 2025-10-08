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
var DescribeInventoryItemSetMetricsRequest = /** @class */ (function () {
    function DescribeInventoryItemSetMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.inventoryName = null;
    }
    DescribeInventoryItemSetMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    DescribeInventoryItemSetMetricsRequest.fromDict = function (data) {
        return new DescribeInventoryItemSetMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"]);
    };
    DescribeInventoryItemSetMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
        };
    };
    return DescribeInventoryItemSetMetricsRequest;
}());
exports.default = DescribeInventoryItemSetMetricsRequest;
//# sourceMappingURL=DescribeInventoryItemSetMetricsRequest.js.map