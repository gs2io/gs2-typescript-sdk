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
var DescribeShowcaseDisplayItemMetricsRequest = /** @class */ (function () {
    function DescribeShowcaseDisplayItemMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
    }
    DescribeShowcaseDisplayItemMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeShowcaseDisplayItemMetricsRequest.fromDict = function (data) {
        return new DescribeShowcaseDisplayItemMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"]);
    };
    DescribeShowcaseDisplayItemMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
        };
    };
    return DescribeShowcaseDisplayItemMetricsRequest;
}());
exports.default = DescribeShowcaseDisplayItemMetricsRequest;
//# sourceMappingURL=DescribeShowcaseDisplayItemMetricsRequest.js.map