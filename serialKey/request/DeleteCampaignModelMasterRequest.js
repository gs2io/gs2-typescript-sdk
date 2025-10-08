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
var DeleteCampaignModelMasterRequest = /** @class */ (function () {
    function DeleteCampaignModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
    }
    DeleteCampaignModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCampaignModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCampaignModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCampaignModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    DeleteCampaignModelMasterRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DeleteCampaignModelMasterRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DeleteCampaignModelMasterRequest.fromDict = function (data) {
        return new DeleteCampaignModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"]);
    };
    DeleteCampaignModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
        };
    };
    return DeleteCampaignModelMasterRequest;
}());
exports.default = DeleteCampaignModelMasterRequest;
//# sourceMappingURL=DeleteCampaignModelMasterRequest.js.map