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
var GetQuestModelRequest = /** @class */ (function () {
    function GetQuestModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.questName = null;
    }
    GetQuestModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetQuestModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetQuestModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetQuestModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestModelRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetQuestModelRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestModelRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestModelRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    GetQuestModelRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestModelRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    GetQuestModelRequest.fromDict = function (data) {
        return new GetQuestModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"]);
    };
    GetQuestModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
        };
    };
    return GetQuestModelRequest;
}());
export default GetQuestModelRequest;
//# sourceMappingURL=GetQuestModelRequest.js.map