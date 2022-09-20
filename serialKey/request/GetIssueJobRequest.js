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
var GetIssueJobRequest = /** @class */ (function () {
    function GetIssueJobRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.issueJobName = null;
    }
    GetIssueJobRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetIssueJobRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIssueJobRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetIssueJobRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetIssueJobRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIssueJobRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetIssueJobRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetIssueJobRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIssueJobRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetIssueJobRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    GetIssueJobRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetIssueJobRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    GetIssueJobRequest.prototype.getIssueJobName = function () {
        return this.issueJobName;
    };
    GetIssueJobRequest.prototype.setIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    GetIssueJobRequest.prototype.withIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    GetIssueJobRequest.fromDict = function (data) {
        return new GetIssueJobRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withIssueJobName(data["issueJobName"]);
    };
    GetIssueJobRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "issueJobName": this.getIssueJobName(),
        };
    };
    return GetIssueJobRequest;
}());
exports.default = GetIssueJobRequest;
//# sourceMappingURL=GetIssueJobRequest.js.map