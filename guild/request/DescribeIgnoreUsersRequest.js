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
var DescribeIgnoreUsersRequest = /** @class */ (function () {
    function DescribeIgnoreUsersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeIgnoreUsersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIgnoreUsersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIgnoreUsersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeIgnoreUsersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    DescribeIgnoreUsersRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeIgnoreUsersRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeIgnoreUsersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeIgnoreUsersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIgnoreUsersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIgnoreUsersRequest.fromDict = function (data) {
        return new DescribeIgnoreUsersRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeIgnoreUsersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeIgnoreUsersRequest;
}());
exports.default = DescribeIgnoreUsersRequest;
//# sourceMappingURL=DescribeIgnoreUsersRequest.js.map