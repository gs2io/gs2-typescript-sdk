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
var DescribeFollowsRequest = /** @class */ (function () {
    function DescribeFollowsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFollowsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFollowsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFollowsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFollowsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFollowsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFollowsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFollowsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFollowsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFollowsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFollowsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeFollowsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFollowsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFollowsRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeFollowsRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFollowsRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFollowsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFollowsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFollowsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFollowsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFollowsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFollowsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFollowsRequest.fromDict = function (data) {
        return new DescribeFollowsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFollowsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFollowsRequest;
}());
exports.default = DescribeFollowsRequest;
//# sourceMappingURL=DescribeFollowsRequest.js.map