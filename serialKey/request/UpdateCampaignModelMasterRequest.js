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
var UpdateCampaignModelMasterRequest = /** @class */ (function () {
    function UpdateCampaignModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.description = null;
        this.metadata = null;
        this.enableCampaignCode = null;
    }
    UpdateCampaignModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCampaignModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCampaignModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCampaignModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    UpdateCampaignModelMasterRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateCampaignModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateCampaignModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.getEnableCampaignCode = function () {
        return this.enableCampaignCode;
    };
    UpdateCampaignModelMasterRequest.prototype.setEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    UpdateCampaignModelMasterRequest.prototype.withEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    UpdateCampaignModelMasterRequest.fromDict = function (data) {
        return new UpdateCampaignModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withEnableCampaignCode(data["enableCampaignCode"]);
    };
    UpdateCampaignModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "enableCampaignCode": this.getEnableCampaignCode(),
        };
    };
    return UpdateCampaignModelMasterRequest;
}());
exports.default = UpdateCampaignModelMasterRequest;
//# sourceMappingURL=UpdateCampaignModelMasterRequest.js.map