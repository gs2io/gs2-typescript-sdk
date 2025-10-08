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
var DescribeExperienceNamespaceMetricsRequest = /** @class */ (function () {
    function DescribeExperienceNamespaceMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    DescribeExperienceNamespaceMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExperienceNamespaceMetricsRequest.fromDict = function (data) {
        return new DescribeExperienceNamespaceMetricsRequest();
    };
    DescribeExperienceNamespaceMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return DescribeExperienceNamespaceMetricsRequest;
}());
exports.default = DescribeExperienceNamespaceMetricsRequest;
//# sourceMappingURL=DescribeExperienceNamespaceMetricsRequest.js.map