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
var Gs2SkillTree = tslib_1.__importStar(require("../model"));
var CreateNodeModelMasterRequest = /** @class */ (function () {
    function CreateNodeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.releaseVerifyActions = null;
        this.releaseConsumeActions = null;
        this.restrainReturnRate = null;
        this.premiseNodeNames = null;
    }
    CreateNodeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNodeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNodeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateNodeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNodeModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNodeModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateNodeModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getReleaseVerifyActions = function () {
        return this.releaseVerifyActions;
    };
    CreateNodeModelMasterRequest.prototype.setReleaseVerifyActions = function (releaseVerifyActions) {
        this.releaseVerifyActions = releaseVerifyActions;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withReleaseVerifyActions = function (releaseVerifyActions) {
        this.releaseVerifyActions = releaseVerifyActions;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    CreateNodeModelMasterRequest.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    CreateNodeModelMasterRequest.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    CreateNodeModelMasterRequest.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    CreateNodeModelMasterRequest.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    CreateNodeModelMasterRequest.fromDict = function (data) {
        return new CreateNodeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withReleaseVerifyActions(data.releaseVerifyActions ?
            data.releaseVerifyActions.map(function (item) {
                return Gs2SkillTree.VerifyAction.fromDict(item);
            }) : [])
            .withReleaseConsumeActions(data.releaseConsumeActions ?
            data.releaseConsumeActions.map(function (item) {
                return Gs2SkillTree.ConsumeAction.fromDict(item);
            }) : [])
            .withRestrainReturnRate(data["restrainReturnRate"])
            .withPremiseNodeNames(data.premiseNodeNames ?
            data.premiseNodeNames.map(function (item) {
                return item;
            }) : []);
    };
    CreateNodeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "releaseVerifyActions": this.getReleaseVerifyActions() ?
                this.getReleaseVerifyActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "releaseConsumeActions": this.getReleaseConsumeActions() ?
                this.getReleaseConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "restrainReturnRate": this.getRestrainReturnRate(),
            "premiseNodeNames": this.getPremiseNodeNames() ?
                this.getPremiseNodeNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return CreateNodeModelMasterRequest;
}());
exports.default = CreateNodeModelMasterRequest;
//# sourceMappingURL=CreateNodeModelMasterRequest.js.map