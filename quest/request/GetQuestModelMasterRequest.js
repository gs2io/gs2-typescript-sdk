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
var GetQuestModelMasterRequest = /** @class */ (function () {
    function GetQuestModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.questName = null;
    }
    GetQuestModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetQuestModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetQuestModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetQuestModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestModelMasterRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetQuestModelMasterRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestModelMasterRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestModelMasterRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    GetQuestModelMasterRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestModelMasterRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestModelMasterRequest.fromDict = function (data) {
        return new GetQuestModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"]);
    };
    GetQuestModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
        };
    };
    return GetQuestModelMasterRequest;
}());
exports.default = GetQuestModelMasterRequest;
//# sourceMappingURL=GetQuestModelMasterRequest.js.map