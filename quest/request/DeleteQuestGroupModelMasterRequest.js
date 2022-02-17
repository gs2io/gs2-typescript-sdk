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
var DeleteQuestGroupModelMasterRequest = /** @class */ (function () {
    function DeleteQuestGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
    }
    DeleteQuestGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteQuestGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteQuestGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteQuestGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    DeleteQuestGroupModelMasterRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    DeleteQuestGroupModelMasterRequest.fromDict = function (data) {
        return new DeleteQuestGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"]);
    };
    DeleteQuestGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
        };
    };
    return DeleteQuestGroupModelMasterRequest;
}());
export default DeleteQuestGroupModelMasterRequest;
//# sourceMappingURL=DeleteQuestGroupModelMasterRequest.js.map