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
var VerifyCompletedQuestListByUserIdRequest = /** @class */ (function () {
    function VerifyCompletedQuestListByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.questGroupName = null;
        this.questName = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyCompletedQuestListByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompletedQuestListByUserIdRequest.fromDict = function (data) {
        return new VerifyCompletedQuestListByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyCompletedQuestListByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyCompletedQuestListByUserIdRequest;
}());
exports.default = VerifyCompletedQuestListByUserIdRequest;
//# sourceMappingURL=VerifyCompletedQuestListByUserIdRequest.js.map