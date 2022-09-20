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
var GetCurrentCampaignMasterRequest = /** @class */ (function () {
    function GetCurrentCampaignMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentCampaignMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentCampaignMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentCampaignMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentCampaignMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentCampaignMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentCampaignMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentCampaignMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentCampaignMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentCampaignMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentCampaignMasterRequest.fromDict = function (data) {
        return new GetCurrentCampaignMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentCampaignMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentCampaignMasterRequest;
}());
exports.default = GetCurrentCampaignMasterRequest;
//# sourceMappingURL=GetCurrentCampaignMasterRequest.js.map