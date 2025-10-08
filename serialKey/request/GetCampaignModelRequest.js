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
var GetCampaignModelRequest = /** @class */ (function () {
    function GetCampaignModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
    }
    GetCampaignModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCampaignModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCampaignModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCampaignModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCampaignModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCampaignModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCampaignModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCampaignModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCampaignModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCampaignModelRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    GetCampaignModelRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetCampaignModelRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetCampaignModelRequest.fromDict = function (data) {
        return new GetCampaignModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"]);
    };
    GetCampaignModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
        };
    };
    return GetCampaignModelRequest;
}());
exports.default = GetCampaignModelRequest;
//# sourceMappingURL=GetCampaignModelRequest.js.map