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
var CreateStatusModelMasterRequest = /** @class */ (function () {
    function CreateStatusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.releaseConsumeActions = null;
        this.restrainReturnRate = null;
        this.premiseNodeNames = null;
    }
    CreateStatusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStatusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStatusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateStatusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStatusModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStatusModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateStatusModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    CreateStatusModelMasterRequest.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    CreateStatusModelMasterRequest.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    CreateStatusModelMasterRequest.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    CreateStatusModelMasterRequest.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    CreateStatusModelMasterRequest.fromDict = function (data) {
        return new CreateStatusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
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
    CreateStatusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
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
    return CreateStatusModelMasterRequest;
}());
exports.default = CreateStatusModelMasterRequest;
//# sourceMappingURL=CreateStatusModelMasterRequest.js.map