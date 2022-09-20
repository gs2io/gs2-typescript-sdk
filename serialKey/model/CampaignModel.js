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
var CampaignModel = /** @class */ (function () {
    function CampaignModel() {
        this.campaignId = null;
        this.name = null;
        this.metadata = null;
        this.enableCampaignCode = null;
    }
    CampaignModel.getRegion = function (grn) {
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
    CampaignModel.getOwnerId = function (grn) {
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
    CampaignModel.getNamespaceName = function (grn) {
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
    CampaignModel.getCampaignModelName = function (grn) {
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
    CampaignModel.isValid = function (grn) {
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
    CampaignModel.createGrn = function (region, ownerId, namespaceName, campaignModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{campaignModelName}', campaignModelName !== null && campaignModelName !== void 0 ? campaignModelName : '');
    };
    CampaignModel.prototype.getCampaignId = function () {
        return this.campaignId;
    };
    CampaignModel.prototype.setCampaignId = function (campaignId) {
        this.campaignId = campaignId;
        return this;
    };
    CampaignModel.prototype.withCampaignId = function (campaignId) {
        this.campaignId = campaignId;
        return this;
    };
    CampaignModel.prototype.getName = function () {
        return this.name;
    };
    CampaignModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CampaignModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CampaignModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    CampaignModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CampaignModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CampaignModel.prototype.getEnableCampaignCode = function () {
        return this.enableCampaignCode;
    };
    CampaignModel.prototype.setEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CampaignModel.prototype.withEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CampaignModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CampaignModel()
            .withCampaignId(data["campaignId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withEnableCampaignCode(data["enableCampaignCode"]);
    };
    CampaignModel.prototype.toDict = function () {
        return {
            "campaignId": this.getCampaignId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "enableCampaignCode": this.getEnableCampaignCode(),
        };
    };
    return CampaignModel;
}());
exports.default = CampaignModel;
//# sourceMappingURL=CampaignModel.js.map