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
var GetCompletedQuestListByUserIdRequest = /** @class */ (function () {
    function GetCompletedQuestListByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.userId = null;
    }
    GetCompletedQuestListByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCompletedQuestListByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCompletedQuestListByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCompletedQuestListByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetCompletedQuestListByUserIdRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetCompletedQuestListByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetCompletedQuestListByUserIdRequest.fromDict = function (data) {
        return new GetCompletedQuestListByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withUserId(data["userId"]);
    };
    GetCompletedQuestListByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "userId": this.getUserId(),
        };
    };
    return GetCompletedQuestListByUserIdRequest;
}());
exports.default = GetCompletedQuestListByUserIdRequest;
//# sourceMappingURL=GetCompletedQuestListByUserIdRequest.js.map