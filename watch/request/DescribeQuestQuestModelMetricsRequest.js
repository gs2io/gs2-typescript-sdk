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
var DescribeQuestQuestModelMetricsRequest = /** @class */ (function () {
    function DescribeQuestQuestModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
    }
    DescribeQuestQuestModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestQuestModelMetricsRequest.fromDict = function (data) {
        return new DescribeQuestQuestModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"]);
    };
    DescribeQuestQuestModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
        };
    };
    return DescribeQuestQuestModelMetricsRequest;
}());
exports.default = DescribeQuestQuestModelMetricsRequest;
//# sourceMappingURL=DescribeQuestQuestModelMetricsRequest.js.map