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
var CreateQuestGroupModelMasterRequest = /** @class */ (function () {
    function CreateQuestGroupModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.challengePeriodEventId = null;
    }
    CreateQuestGroupModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateQuestGroupModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateQuestGroupModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateQuestGroupModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateQuestGroupModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateQuestGroupModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateQuestGroupModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CreateQuestGroupModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateQuestGroupModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateQuestGroupModelMasterRequest.fromDict = function (data) {
        return new CreateQuestGroupModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    CreateQuestGroupModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return CreateQuestGroupModelMasterRequest;
}());
exports.default = CreateQuestGroupModelMasterRequest;
//# sourceMappingURL=CreateQuestGroupModelMasterRequest.js.map