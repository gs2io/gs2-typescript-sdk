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
var DescribeFormationMoldMetricsRequest = /** @class */ (function () {
    function DescribeFormationMoldMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeFormationMoldMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFormationMoldMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormationMoldMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormationMoldMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFormationMoldMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormationMoldMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormationMoldMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFormationMoldMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormationMoldMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormationMoldMetricsRequest.fromDict = function (data) {
        return new DescribeFormationMoldMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeFormationMoldMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeFormationMoldMetricsRequest;
}());
exports.default = DescribeFormationMoldMetricsRequest;
//# sourceMappingURL=DescribeFormationMoldMetricsRequest.js.map