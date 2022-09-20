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
var GetCampaignModelMasterRequest = /** @class */ (function () {
    function GetCampaignModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
    }
    GetCampaignModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCampaignModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCampaignModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCampaignModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    GetCampaignModelMasterRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetCampaignModelMasterRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetCampaignModelMasterRequest.fromDict = function (data) {
        return new GetCampaignModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"]);
    };
    GetCampaignModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
        };
    };
    return GetCampaignModelMasterRequest;
}());
exports.default = GetCampaignModelMasterRequest;
//# sourceMappingURL=GetCampaignModelMasterRequest.js.map