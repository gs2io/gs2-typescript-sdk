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
var DeleteCompletedQuestListByUserIdRequest = /** @class */ (function () {
    function DeleteCompletedQuestListByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DeleteCompletedQuestListByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCompletedQuestListByUserIdRequest.fromDict = function (data) {
        return new DeleteCompletedQuestListByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withUserId(data["userId"]);
    };
    DeleteCompletedQuestListByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "userId": this.getUserId(),
        };
    };
    return DeleteCompletedQuestListByUserIdRequest;
}());
exports.default = DeleteCompletedQuestListByUserIdRequest;
//# sourceMappingURL=DeleteCompletedQuestListByUserIdRequest.js.map