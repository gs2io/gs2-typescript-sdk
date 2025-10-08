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
var UpdateStatusModelMasterRequest = /** @class */ (function () {
    function UpdateStatusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.nodeModelName = null;
        this.description = null;
        this.metadata = null;
        this.releaseConsumeActions = null;
        this.restrainReturnRate = null;
        this.premiseNodeNames = null;
    }
    UpdateStatusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStatusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStatusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStatusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    UpdateStatusModelMasterRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStatusModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateStatusModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    UpdateStatusModelMasterRequest.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    UpdateStatusModelMasterRequest.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    UpdateStatusModelMasterRequest.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    UpdateStatusModelMasterRequest.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    UpdateStatusModelMasterRequest.fromDict = function (data) {
        return new UpdateStatusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"])
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
    UpdateStatusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
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
    return UpdateStatusModelMasterRequest;
}());
exports.default = UpdateStatusModelMasterRequest;
//# sourceMappingURL=UpdateStatusModelMasterRequest.js.map