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
var DescribeReceiveRequestsByGuildNameRequest = /** @class */ (function () {
    function DescribeReceiveRequestsByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeReceiveRequestsByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsByGuildNameRequest.fromDict = function (data) {
        return new DescribeReceiveRequestsByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeReceiveRequestsByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeReceiveRequestsByGuildNameRequest;
}());
exports.default = DescribeReceiveRequestsByGuildNameRequest;
//# sourceMappingURL=DescribeReceiveRequestsByGuildNameRequest.js.map