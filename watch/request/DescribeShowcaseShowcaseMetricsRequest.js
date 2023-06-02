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
var DescribeShowcaseShowcaseMetricsRequest = /** @class */ (function () {
    function DescribeShowcaseShowcaseMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeShowcaseShowcaseMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeShowcaseShowcaseMetricsRequest.fromDict = function (data) {
        return new DescribeShowcaseShowcaseMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeShowcaseShowcaseMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeShowcaseShowcaseMetricsRequest;
}());
exports.default = DescribeShowcaseShowcaseMetricsRequest;
//# sourceMappingURL=DescribeShowcaseShowcaseMetricsRequest.js.map