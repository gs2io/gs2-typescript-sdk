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
var GetCompletedQuestListRequest = /** @class */ (function () {
    function GetCompletedQuestListRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.accessToken = null;
    }
    GetCompletedQuestListRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCompletedQuestListRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompletedQuestListRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCompletedQuestListRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCompletedQuestListRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompletedQuestListRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCompletedQuestListRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCompletedQuestListRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompletedQuestListRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCompletedQuestListRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetCompletedQuestListRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetCompletedQuestListRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetCompletedQuestListRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetCompletedQuestListRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCompletedQuestListRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetCompletedQuestListRequest.fromDict = function (data) {
        return new GetCompletedQuestListRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withAccessToken(data["accessToken"]);
    };
    GetCompletedQuestListRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetCompletedQuestListRequest;
}());
export default GetCompletedQuestListRequest;
//# sourceMappingURL=GetCompletedQuestListRequest.js.map