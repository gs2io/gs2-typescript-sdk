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
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:skillTree:{namespaceName}:model:{nodeModelName}";
var NodeModelMaster = /** @class */ (function () {
    function NodeModelMaster() {
        this.nodeModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.releaseConsumeActions = null;
        this.restrainReturnRate = null;
        this.premiseNodeNames = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    NodeModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{nodeModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    NodeModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{nodeModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    NodeModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{nodeModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    NodeModelMaster.getNodeModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{nodeModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    NodeModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getNodeModelName(grn) == null || this.getNodeModelName(grn) === '') {
            return false;
        }
        return true;
    };
    NodeModelMaster.createGrn = function (region, ownerId, namespaceName, nodeModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{nodeModelName}', nodeModelName !== null && nodeModelName !== void 0 ? nodeModelName : '');
    };
    NodeModelMaster.prototype.getNodeModelId = function () {
        return this.nodeModelId;
    };
    NodeModelMaster.prototype.setNodeModelId = function (nodeModelId) {
        this.nodeModelId = nodeModelId;
        return this;
    };
    NodeModelMaster.prototype.withNodeModelId = function (nodeModelId) {
        this.nodeModelId = nodeModelId;
        return this;
    };
    NodeModelMaster.prototype.getName = function () {
        return this.name;
    };
    NodeModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    NodeModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    NodeModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    NodeModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    NodeModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    NodeModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    NodeModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    NodeModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    NodeModelMaster.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    NodeModelMaster.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    NodeModelMaster.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    NodeModelMaster.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    NodeModelMaster.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    NodeModelMaster.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    NodeModelMaster.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    NodeModelMaster.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    NodeModelMaster.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    NodeModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    NodeModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    NodeModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    NodeModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    NodeModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    NodeModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    NodeModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    NodeModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    NodeModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    NodeModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new NodeModelMaster()
            .withNodeModelId(data["nodeModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withReleaseConsumeActions(data.releaseConsumeActions ?
            data.releaseConsumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withRestrainReturnRate(data["restrainReturnRate"])
            .withPremiseNodeNames(data.premiseNodeNames ?
            data.premiseNodeNames.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    NodeModelMaster.prototype.toDict = function () {
        return {
            "nodeModelId": this.getNodeModelId(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return NodeModelMaster;
}());
exports.default = NodeModelMaster;
//# sourceMappingURL=NodeModelMaster.js.map