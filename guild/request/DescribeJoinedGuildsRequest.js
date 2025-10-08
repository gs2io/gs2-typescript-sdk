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
var DescribeJoinedGuildsRequest = /** @class */ (function () {
    function DescribeJoinedGuildsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.guildModelName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeJoinedGuildsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeJoinedGuildsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeJoinedGuildsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeJoinedGuildsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeJoinedGuildsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DescribeJoinedGuildsRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeJoinedGuildsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeJoinedGuildsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedGuildsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedGuildsRequest.fromDict = function (data) {
        return new DescribeJoinedGuildsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeJoinedGuildsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeJoinedGuildsRequest;
}());
exports.default = DescribeJoinedGuildsRequest;
//# sourceMappingURL=DescribeJoinedGuildsRequest.js.map