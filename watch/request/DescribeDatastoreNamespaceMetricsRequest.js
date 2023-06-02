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
var DescribeDatastoreNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeDatastoreNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeDatastoreNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDatastoreNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeDatastoreNamespaceMetricsRequest();
    };
    DescribeDatastoreNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeDatastoreNamespaceMetricsRequest;
}());
exports.default = DescribeDatastoreNamespaceMetricsRequest;
//# sourceMappingURL=DescribeDatastoreNamespaceMetricsRequest.js.map