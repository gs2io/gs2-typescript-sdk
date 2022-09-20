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
var DescribeSerialCodesRequest = /** @class */ (function () {
    function DescribeSerialCodesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.issueJobName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSerialCodesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSerialCodesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSerialCodesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSerialCodesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    DescribeSerialCodesRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getIssueJobName = function () {
        return this.issueJobName;
    };
    DescribeSerialCodesRequest.prototype.setIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSerialCodesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSerialCodesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSerialCodesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSerialCodesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSerialCodesRequest.fromDict = function (data) {
        return new DescribeSerialCodesRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withIssueJobName(data["issueJobName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSerialCodesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "issueJobName": this.getIssueJobName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSerialCodesRequest;
}());
exports.default = DescribeSerialCodesRequest;
//# sourceMappingURL=DescribeSerialCodesRequest.js.map