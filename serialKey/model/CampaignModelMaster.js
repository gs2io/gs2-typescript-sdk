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
var grnFormat = "grn:gs2:{region}:{ownerId}:serialKey:{namespaceName}:master:campaign:{campaignModelName}";
var CampaignModelMaster = /** @class */ (function () {
    function CampaignModelMaster() {
        this.campaignId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.enableCampaignCode = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    CampaignModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CampaignModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CampaignModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{campaignModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CampaignModelMaster.getCampaignModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{campaignModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CampaignModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCampaignModelName(grn) == null || this.getCampaignModelName(grn) === '') {
            return false;
        }
        return true;
    };
    CampaignModelMaster.createGrn = function (region, ownerId, namespaceName, campaignModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{campaignModelName}', campaignModelName !== null && campaignModelName !== void 0 ? campaignModelName : '');
    };
    CampaignModelMaster.prototype.getCampaignId = function () {
        return this.campaignId;
    };
    CampaignModelMaster.prototype.setCampaignId = function (campaignId) {
        this.campaignId = campaignId;
        return this;
    };
    CampaignModelMaster.prototype.withCampaignId = function (campaignId) {
        this.campaignId = campaignId;
        return this;
    };
    CampaignModelMaster.prototype.getName = function () {
        return this.name;
    };
    CampaignModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CampaignModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CampaignModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    CampaignModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CampaignModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CampaignModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    CampaignModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CampaignModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CampaignModelMaster.prototype.getEnableCampaignCode = function () {
        return this.enableCampaignCode;
    };
    CampaignModelMaster.prototype.setEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CampaignModelMaster.prototype.withEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CampaignModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CampaignModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CampaignModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CampaignModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CampaignModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CampaignModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CampaignModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    CampaignModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CampaignModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CampaignModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CampaignModelMaster()
            .withCampaignId(data["campaignId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withEnableCampaignCode(data["enableCampaignCode"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    CampaignModelMaster.prototype.toDict = function () {
        return {
            "campaignId": this.getCampaignId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "enableCampaignCode": this.getEnableCampaignCode(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return CampaignModelMaster;
}());
exports.default = CampaignModelMaster;
//# sourceMappingURL=CampaignModelMaster.js.map