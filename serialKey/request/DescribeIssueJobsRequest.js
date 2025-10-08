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
var DescribeIssueJobsRequest = /** @class */ (function () {
    function DescribeIssueJobsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeIssueJobsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIssueJobsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIssueJobsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIssueJobsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIssueJobsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeIssueJobsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIssueJobsRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    DescribeIssueJobsRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeIssueJobsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeIssueJobsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIssueJobsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeIssueJobsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIssueJobsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIssueJobsRequest.fromDict = function (data) {
        return new DescribeIssueJobsRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeIssueJobsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeIssueJobsRequest;
}());
exports.default = DescribeIssueJobsRequest;
//# sourceMappingURL=DescribeIssueJobsRequest.js.map