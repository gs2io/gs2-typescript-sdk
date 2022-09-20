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
var IssueRequest = /** @class */ (function () {
    function IssueRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.metadata = null;
        this.issueRequestCount = null;
    }
    IssueRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IssueRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    IssueRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    IssueRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    IssueRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    IssueRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueRequest.prototype.getIssueRequestCount = function () {
        return this.issueRequestCount;
    };
    IssueRequest.prototype.setIssueRequestCount = function (issueRequestCount) {
        this.issueRequestCount = issueRequestCount;
        return this;
    };
    IssueRequest.prototype.withIssueRequestCount = function (issueRequestCount) {
        this.issueRequestCount = issueRequestCount;
        return this;
    };
    IssueRequest.fromDict = function (data) {
        return new IssueRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withMetadata(data["metadata"])
            .withIssueRequestCount(data["issueRequestCount"]);
    };
    IssueRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "metadata": this.getMetadata(),
            "issueRequestCount": this.getIssueRequestCount(),
        };
    };
    return IssueRequest;
}());
exports.default = IssueRequest;
//# sourceMappingURL=IssueRequest.js.map