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
var tslib_1 = require("tslib");
var Gs2Quest = tslib_1.__importStar(require("../model"));
var UpdateQuestModelMasterRequest = /** @class */ (function () {
    function UpdateQuestModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.questName = null;
        this.description = null;
        this.metadata = null;
        this.contents = null;
        this.challengePeriodEventId = null;
        this.firstCompleteAcquireActions = null;
        this.consumeActions = null;
        this.failedAcquireActions = null;
        this.premiseQuestNames = null;
    }
    UpdateQuestModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateQuestModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateQuestModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateQuestModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    UpdateQuestModelMasterRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getQuestName = function () {
        return this.questName;
    };
    UpdateQuestModelMasterRequest.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateQuestModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateQuestModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getContents = function () {
        return this.contents;
    };
    UpdateQuestModelMasterRequest.prototype.setContents = function (contents) {
        this.contents = contents;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withContents = function (contents) {
        this.contents = contents;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    UpdateQuestModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getFirstCompleteAcquireActions = function () {
        return this.firstCompleteAcquireActions;
    };
    UpdateQuestModelMasterRequest.prototype.setFirstCompleteAcquireActions = function (firstCompleteAcquireActions) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withFirstCompleteAcquireActions = function (firstCompleteAcquireActions) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    UpdateQuestModelMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getFailedAcquireActions = function () {
        return this.failedAcquireActions;
    };
    UpdateQuestModelMasterRequest.prototype.setFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.getPremiseQuestNames = function () {
        return this.premiseQuestNames;
    };
    UpdateQuestModelMasterRequest.prototype.setPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    UpdateQuestModelMasterRequest.prototype.withPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    UpdateQuestModelMasterRequest.fromDict = function (data) {
        return new UpdateQuestModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withContents(data.contents ?
            data.contents.map(function (item) {
                return Gs2Quest.Contents.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withFirstCompleteAcquireActions(data.firstCompleteAcquireActions ?
            data.firstCompleteAcquireActions.map(function (item) {
                return Gs2Quest.AcquireAction.fromDict(item);
            }) : [])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Quest.ConsumeAction.fromDict(item);
            }) : [])
            .withFailedAcquireActions(data.failedAcquireActions ?
            data.failedAcquireActions.map(function (item) {
                return Gs2Quest.AcquireAction.fromDict(item);
            }) : [])
            .withPremiseQuestNames(data.premiseQuestNames ?
            data.premiseQuestNames.map(function (item) {
                return item;
            }) : []);
    };
    UpdateQuestModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "contents": this.getContents() ?
                this.getContents().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "firstCompleteAcquireActions": this.getFirstCompleteAcquireActions() ?
                this.getFirstCompleteAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "failedAcquireActions": this.getFailedAcquireActions() ?
                this.getFailedAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "premiseQuestNames": this.getPremiseQuestNames() ?
                this.getPremiseQuestNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateQuestModelMasterRequest;
}());
exports.default = UpdateQuestModelMasterRequest;
//# sourceMappingURL=UpdateQuestModelMasterRequest.js.map