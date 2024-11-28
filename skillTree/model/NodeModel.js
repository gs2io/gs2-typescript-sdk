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
var Gs2SkillTree = tslib_1.__importStar(require("../../skillTree/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:skillTree:{namespaceName}:model:{nodeModelName}";
var NodeModel = /** @class */ (function () {
    function NodeModel() {
        this.nodeModelId = null;
        this.name = null;
        this.metadata = null;
        this.releaseVerifyActions = null;
        this.releaseConsumeActions = null;
        this.returnAcquireActions = null;
        this.restrainReturnRate = null;
        this.premiseNodeNames = null;
    }
    NodeModel.getRegion = function (grn) {
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
    NodeModel.getOwnerId = function (grn) {
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
    NodeModel.getNamespaceName = function (grn) {
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
    NodeModel.getNodeModelName = function (grn) {
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
    NodeModel.isValid = function (grn) {
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
    NodeModel.createGrn = function (region, ownerId, namespaceName, nodeModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{nodeModelName}', nodeModelName !== null && nodeModelName !== void 0 ? nodeModelName : '');
    };
    NodeModel.prototype.getNodeModelId = function () {
        return this.nodeModelId;
    };
    NodeModel.prototype.setNodeModelId = function (nodeModelId) {
        this.nodeModelId = nodeModelId;
        return this;
    };
    NodeModel.prototype.withNodeModelId = function (nodeModelId) {
        this.nodeModelId = nodeModelId;
        return this;
    };
    NodeModel.prototype.getName = function () {
        return this.name;
    };
    NodeModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    NodeModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    NodeModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    NodeModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    NodeModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    NodeModel.prototype.getReleaseVerifyActions = function () {
        return this.releaseVerifyActions;
    };
    NodeModel.prototype.setReleaseVerifyActions = function (releaseVerifyActions) {
        this.releaseVerifyActions = releaseVerifyActions;
        return this;
    };
    NodeModel.prototype.withReleaseVerifyActions = function (releaseVerifyActions) {
        this.releaseVerifyActions = releaseVerifyActions;
        return this;
    };
    NodeModel.prototype.getReleaseConsumeActions = function () {
        return this.releaseConsumeActions;
    };
    NodeModel.prototype.setReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    NodeModel.prototype.withReleaseConsumeActions = function (releaseConsumeActions) {
        this.releaseConsumeActions = releaseConsumeActions;
        return this;
    };
    NodeModel.prototype.getReturnAcquireActions = function () {
        return this.returnAcquireActions;
    };
    NodeModel.prototype.setReturnAcquireActions = function (returnAcquireActions) {
        this.returnAcquireActions = returnAcquireActions;
        return this;
    };
    NodeModel.prototype.withReturnAcquireActions = function (returnAcquireActions) {
        this.returnAcquireActions = returnAcquireActions;
        return this;
    };
    NodeModel.prototype.getRestrainReturnRate = function () {
        return this.restrainReturnRate;
    };
    NodeModel.prototype.setRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    NodeModel.prototype.withRestrainReturnRate = function (restrainReturnRate) {
        this.restrainReturnRate = restrainReturnRate;
        return this;
    };
    NodeModel.prototype.getPremiseNodeNames = function () {
        return this.premiseNodeNames;
    };
    NodeModel.prototype.setPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    NodeModel.prototype.withPremiseNodeNames = function (premiseNodeNames) {
        this.premiseNodeNames = premiseNodeNames;
        return this;
    };
    NodeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new NodeModel()
            .withNodeModelId(data["nodeModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReleaseVerifyActions(data.releaseVerifyActions ?
            data.releaseVerifyActions.map(function (item) {
                return Gs2SkillTree.VerifyAction.fromDict(item);
            }) : null)
            .withReleaseConsumeActions(data.releaseConsumeActions ?
            data.releaseConsumeActions.map(function (item) {
                return Gs2SkillTree.ConsumeAction.fromDict(item);
            }) : null)
            .withReturnAcquireActions(data.returnAcquireActions ?
            data.returnAcquireActions.map(function (item) {
                return Gs2SkillTree.AcquireAction.fromDict(item);
            }) : null)
            .withRestrainReturnRate(data["restrainReturnRate"])
            .withPremiseNodeNames(data.premiseNodeNames ?
            data.premiseNodeNames.map(function (item) {
                return item;
            }) : null);
    };
    NodeModel.prototype.toDict = function () {
        return {
            "nodeModelId": this.getNodeModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "releaseVerifyActions": this.getReleaseVerifyActions() ?
                this.getReleaseVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "releaseConsumeActions": this.getReleaseConsumeActions() ?
                this.getReleaseConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "returnAcquireActions": this.getReturnAcquireActions() ?
                this.getReturnAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "restrainReturnRate": this.getRestrainReturnRate(),
            "premiseNodeNames": this.getPremiseNodeNames() ?
                this.getPremiseNodeNames().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return NodeModel;
}());
exports.default = NodeModel;
//# sourceMappingURL=NodeModel.js.map