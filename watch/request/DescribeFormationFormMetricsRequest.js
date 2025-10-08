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
var DescribeFormationFormMetricsRequest = /** @class */ (function () {
    function DescribeFormationFormMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldModelName = null;
    }
    DescribeFormationFormMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFormationFormMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFormationFormMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFormationFormMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    DescribeFormationFormMetricsRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    DescribeFormationFormMetricsRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    DescribeFormationFormMetricsRequest.fromDict = function (data) {
        return new DescribeFormationFormMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldModelName(data["moldModelName"]);
    };
    DescribeFormationFormMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldModelName": this.getMoldModelName(),
        };
    };
    return DescribeFormationFormMetricsRequest;
}());
exports.default = DescribeFormationFormMetricsRequest;
//# sourceMappingURL=DescribeFormationFormMetricsRequest.js.map