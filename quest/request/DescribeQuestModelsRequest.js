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
var DescribeQuestModelsRequest = /** @class */ (function () {
    function DescribeQuestModelsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
    }
    DescribeQuestModelsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeQuestModelsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestModelsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeQuestModelsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeQuestModelsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestModelsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeQuestModelsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeQuestModelsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestModelsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeQuestModelsRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    DescribeQuestModelsRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestModelsRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DescribeQuestModelsRequest.fromDict = function (data) {
        return new DescribeQuestModelsRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"]);
    };
    DescribeQuestModelsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
        };
    };
    return DescribeQuestModelsRequest;
}());
exports.default = DescribeQuestModelsRequest;
//# sourceMappingURL=DescribeQuestModelsRequest.js.map