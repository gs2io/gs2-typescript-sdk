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
var DescribeReceiveRequestsRequest = /** @class */ (function () {
    function DescribeReceiveRequestsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeReceiveRequestsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiveRequestsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiveRequestsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReceiveRequestsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DescribeReceiveRequestsRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeReceiveRequestsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiveRequestsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiveRequestsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsRequest.fromDict = function (data) {
        return new DescribeReceiveRequestsRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeReceiveRequestsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeReceiveRequestsRequest;
}());
exports.default = DescribeReceiveRequestsRequest;
//# sourceMappingURL=DescribeReceiveRequestsRequest.js.map