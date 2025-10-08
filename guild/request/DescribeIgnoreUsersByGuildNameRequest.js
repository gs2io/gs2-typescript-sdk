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
var DescribeIgnoreUsersByGuildNameRequest = /** @class */ (function () {
    function DescribeIgnoreUsersByGuildNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.guildName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeIgnoreUsersByGuildNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getGuildName = function () {
        return this.guildName;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withGuildName = function (guildName) {
        this.guildName = guildName;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIgnoreUsersByGuildNameRequest.fromDict = function (data) {
        return new DescribeIgnoreUsersByGuildNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeIgnoreUsersByGuildNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeIgnoreUsersByGuildNameRequest;
}());
exports.default = DescribeIgnoreUsersByGuildNameRequest;
//# sourceMappingURL=DescribeIgnoreUsersByGuildNameRequest.js.map