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
var DownloadSerialCodesRequest = /** @class */ (function () {
    function DownloadSerialCodesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.issueJobName = null;
    }
    DownloadSerialCodesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DownloadSerialCodesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DownloadSerialCodesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DownloadSerialCodesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DownloadSerialCodesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DownloadSerialCodesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DownloadSerialCodesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DownloadSerialCodesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DownloadSerialCodesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DownloadSerialCodesRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    DownloadSerialCodesRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DownloadSerialCodesRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DownloadSerialCodesRequest.prototype.getIssueJobName = function () {
        return this.issueJobName;
    };
    DownloadSerialCodesRequest.prototype.setIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DownloadSerialCodesRequest.prototype.withIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DownloadSerialCodesRequest.fromDict = function (data) {
        return new DownloadSerialCodesRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withIssueJobName(data["issueJobName"]);
    };
    DownloadSerialCodesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "issueJobName": this.getIssueJobName(),
        };
    };
    return DownloadSerialCodesRequest;
}());
exports.default = DownloadSerialCodesRequest;
//# sourceMappingURL=DownloadSerialCodesRequest.js.map