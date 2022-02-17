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
var UpdateQuestGroupModelMasterRequest = /** @class */ (function () {
    function UpdateQuestGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.description = null;
        this.metadata = null;
        this.challengePeriodEventId = null;
    }
    UpdateQuestGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    UpdateQuestGroupModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateQuestGroupModelMasterRequest.fromDict = function (data) {
        return new UpdateQuestGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    UpdateQuestGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return UpdateQuestGroupModelMasterRequest;
}());
exports.default = UpdateQuestGroupModelMasterRequest;
//# sourceMappingURL=UpdateQuestGroupModelMasterRequest.js.map