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
var DescribeQuestQuestGroupModelMetricsRequest = /** @class */ (function () {
    function DescribeQuestQuestGroupModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    DescribeQuestQuestGroupModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestQuestGroupModelMetricsRequest.fromDict = function (data) {
        return new DescribeQuestQuestGroupModelMetricsRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    DescribeQuestQuestGroupModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return DescribeQuestQuestGroupModelMetricsRequest;
}());
exports.default = DescribeQuestQuestGroupModelMetricsRequest;
//# sourceMappingURL=DescribeQuestQuestGroupModelMetricsRequest.js.map