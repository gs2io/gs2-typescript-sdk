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
var VerifyCompletedQuestListRequest = /** @class */ (function () {
    function VerifyCompletedQuestListRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.questGroupName = null;
        this.questName = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyCompletedQuestListRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCompletedQuestListRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCompletedQuestListRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCompletedQuestListRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyCompletedQuestListRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    VerifyCompletedQuestListRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    VerifyCompletedQuestListRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCompletedQuestListRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCompletedQuestListRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompletedQuestListRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCompletedQuestListRequest.fromDict = function (data) {
        return new VerifyCompletedQuestListRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyCompletedQuestListRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyCompletedQuestListRequest;
}());
exports.default = VerifyCompletedQuestListRequest;
//# sourceMappingURL=VerifyCompletedQuestListRequest.js.map