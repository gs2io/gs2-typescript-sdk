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
var DescribeSerialKeysRequest = /** @class */ (function () {
    function DescribeSerialKeysRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.campaignModelName = null;
        this.issueJobName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSerialKeysRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSerialKeysRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSerialKeysRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSerialKeysRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getCampaignModelName = function () {
        return this.campaignModelName;
    };
    DescribeSerialKeysRequest.prototype.setCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withCampaignModelName = function (campaignModelName) {
        this.campaignModelName = campaignModelName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getIssueJobName = function () {
        return this.issueJobName;
    };
    DescribeSerialKeysRequest.prototype.setIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withIssueJobName = function (issueJobName) {
        this.issueJobName = issueJobName;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSerialKeysRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSerialKeysRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSerialKeysRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSerialKeysRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSerialKeysRequest.fromDict = function (data) {
        return new DescribeSerialKeysRequest()
            .withNamespaceName(data["namespaceName"])
            .withCampaignModelName(data["campaignModelName"])
            .withIssueJobName(data["issueJobName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSerialKeysRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "campaignModelName": this.getCampaignModelName(),
            "issueJobName": this.getIssueJobName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSerialKeysRequest;
}());
exports.default = DescribeSerialKeysRequest;
//# sourceMappingURL=DescribeSerialKeysRequest.js.map