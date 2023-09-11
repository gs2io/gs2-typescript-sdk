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
var UpdateNodeModelMasterRequest = /** @class */ (function () {
    function UpdateNodeModelMasterRequest() {
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
    UpdateNodeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNodeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNodeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNodeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    UpdateNodeModelMasterRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNodeModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateNodeModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    UpdateNodeModelMasterRequest.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    UpdateNodeModelMasterRequest.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    UpdateNodeModelMasterRequest.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    UpdateNodeModelMasterRequest.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    UpdateNodeModelMasterRequest.fromDict = function (data) {
        return new UpdateNodeModelMasterRequest()
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
    UpdateNodeModelMasterRequest.prototype.toDict = function () {
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
    return UpdateNodeModelMasterRequest;
}());
exports.default = UpdateNodeModelMasterRequest;
//# sourceMappingURL=UpdateNodeModelMasterRequest.js.map