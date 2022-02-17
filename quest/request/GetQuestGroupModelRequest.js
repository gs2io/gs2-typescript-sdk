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
var GetQuestGroupModelRequest = /** @class */ (function () {
    function GetQuestGroupModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
    }
    GetQuestGroupModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetQuestGroupModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestGroupModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetQuestGroupModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetQuestGroupModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestGroupModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetQuestGroupModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetQuestGroupModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestGroupModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetQuestGroupModelRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    GetQuestGroupModelRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestGroupModelRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    GetQuestGroupModelRequest.fromDict = function (data) {
        return new GetQuestGroupModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"]);
    };
    GetQuestGroupModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
        };
    };
    return GetQuestGroupModelRequest;
}());
export default GetQuestGroupModelRequest;
//# sourceMappingURL=GetQuestGroupModelRequest.js.map