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
var DescribeLimitNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeLimitNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeLimitNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLimitNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLimitNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLimitNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLimitNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeLimitNamespaceMetricsRequest();
    };
    DescribeLimitNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeLimitNamespaceMetricsRequest;
}());
exports.default = DescribeLimitNamespaceMetricsRequest;
//# sourceMappingURL=DescribeLimitNamespaceMetricsRequest.js.map