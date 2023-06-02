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
var DescribeExperienceStatusMetricsRequest = /** @class */ (function () {
    function DescribeExperienceStatusMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
    }
    DescribeExperienceStatusMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeExperienceStatusMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeExperienceStatusMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeExperienceStatusMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    DescribeExperienceStatusMetricsRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    DescribeExperienceStatusMetricsRequest.fromDict = function (data) {
        return new DescribeExperienceStatusMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"]);
    };
    DescribeExperienceStatusMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
        };
    };
    return DescribeExperienceStatusMetricsRequest;
}());
exports.default = DescribeExperienceStatusMetricsRequest;
//# sourceMappingURL=DescribeExperienceStatusMetricsRequest.js.map