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
var GetQuestQuestModelMetricsRequest = /** @class */ (function () {
    function GetQuestQuestModelMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.questName = null;
    }
    GetQuestQuestModelMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetQuestQuestModelMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetQuestQuestModelMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetQuestQuestModelMetricsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetQuestQuestModelMetricsRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    GetQuestQuestModelMetricsRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestQuestModelMetricsRequest.fromDict = function (data) {
        return new GetQuestQuestModelMetricsRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"]);
    };
    GetQuestQuestModelMetricsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
        };
    };
    return GetQuestQuestModelMetricsRequest;
}());
exports.default = GetQuestQuestModelMetricsRequest;
//# sourceMappingURL=GetQuestQuestModelMetricsRequest.js.map