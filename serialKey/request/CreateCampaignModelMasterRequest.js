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
var CreateCampaignModelMasterRequest = /** @class */ (function () {
    function CreateCampaignModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.enableCampaignCode = null;
    }
    CreateCampaignModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateCampaignModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateCampaignModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateCampaignModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateCampaignModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateCampaignModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateCampaignModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.getEnableCampaignCode = function () {
        return this.enableCampaignCode;
    };
    CreateCampaignModelMasterRequest.prototype.setEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CreateCampaignModelMasterRequest.prototype.withEnableCampaignCode = function (enableCampaignCode) {
        this.enableCampaignCode = enableCampaignCode;
        return this;
    };
    CreateCampaignModelMasterRequest.fromDict = function (data) {
        return new CreateCampaignModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withEnableCampaignCode(data["enableCampaignCode"]);
    };
    CreateCampaignModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "enableCampaignCode": this.getEnableCampaignCode(),
        };
    };
    return CreateCampaignModelMasterRequest;
}());
exports.default = CreateCampaignModelMasterRequest;
//# sourceMappingURL=CreateCampaignModelMasterRequest.js.map