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
var DescribeInventoryNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeInventoryNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeInventoryNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoryNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeInventoryNamespaceMetricsRequest();
    };
    DescribeInventoryNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeInventoryNamespaceMetricsRequest;
}());
exports.default = DescribeInventoryNamespaceMetricsRequest;
//# sourceMappingURL=DescribeInventoryNamespaceMetricsRequest.js.map