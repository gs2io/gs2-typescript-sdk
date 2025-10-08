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
var GetQuestQuestGroupModelMetricsRequest = /** @class */ (function () {
    function GetQuestQuestGroupModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
    }
    GetQuestQuestGroupModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestQuestGroupModelMetricsRequest.fromDict = function (data) {
        return new GetQuestQuestGroupModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"]);
    };
    GetQuestQuestGroupModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
        };
    };
    return GetQuestQuestGroupModelMetricsRequest;
}());
exports.default = GetQuestQuestGroupModelMetricsRequest;
//# sourceMappingURL=GetQuestQuestGroupModelMetricsRequest.js.map