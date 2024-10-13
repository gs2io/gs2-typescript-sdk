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
var IssueOnceRequest = /** @class */ (function () {
    function IssueOnceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.metadata = null;
    }
    IssueOnceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueOnceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueOnceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueOnceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueOnceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueOnceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueOnceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IssueOnceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueOnceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueOnceRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    IssueOnceRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    IssueOnceRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    IssueOnceRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    IssueOnceRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueOnceRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    IssueOnceRequest.fromDict = function (data) {
        return new IssueOnceRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withMetadata(data["metadata"]);
    };
    IssueOnceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "metadata": this.getMetadata(),
        };
    };
    return IssueOnceRequest;
}());
exports.default = IssueOnceRequest;
//# sourceMappingURL=IssueOnceRequest.js.map