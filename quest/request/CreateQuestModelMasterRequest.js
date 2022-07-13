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
var CreateQuestModelMasterRequest = /** @class */ (function () {
    function CreateQuestModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.questGroupName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.contents = null;
        this.challengePeriodEventId = null;
        this.firstCompleteAcquireActions = null;
        this.consumeActions = null;
        this.failedAcquireActions = null;
        this.premiseQuestNames = null;
    }
    CreateQuestModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateQuestModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateQuestModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateQuestModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    CreateQuestModelMasterRequest.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateQuestModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateQuestModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateQuestModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getContents = function () {
        return this.contents;
    };
    CreateQuestModelMasterRequest.prototype.setContents = function (contents) {
        this.contents = contents;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withContents = function (contents) {
        this.contents = contents;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CreateQuestModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getFirstCompleteAcquireActions = function () {
        return this.firstCompleteAcquireActions;
    };
    CreateQuestModelMasterRequest.prototype.setFirstCompleteAcquireActions = function (firstCompleteAcquireActions) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withFirstCompleteAcquireActions = function (firstCompleteAcquireActions) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    CreateQuestModelMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getFailedAcquireActions = function () {
        return this.failedAcquireActions;
    };
    CreateQuestModelMasterRequest.prototype.setFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.getPremiseQuestNames = function () {
        return this.premiseQuestNames;
    };
    CreateQuestModelMasterRequest.prototype.setPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    CreateQuestModelMasterRequest.prototype.withPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    CreateQuestModelMasterRequest.fromDict = function (data) {
        return new CreateQuestModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withName(data["name"])
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
    CreateQuestModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "name": this.getName(),
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
    return CreateQuestModelMasterRequest;
}());
exports.default = CreateQuestModelMasterRequest;
//# sourceMappingURL=CreateQuestModelMasterRequest.js.map