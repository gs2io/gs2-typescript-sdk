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
var DescribeJoinedSeasonGatheringsRequest = /** @class */ (function () {
    function DescribeJoinedSeasonGatheringsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.seasonName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeJoinedSeasonGatheringsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedSeasonGatheringsRequest.fromDict = function (data) {
        return new DescribeJoinedSeasonGatheringsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withSeasonName(data["seasonName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeJoinedSeasonGatheringsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "seasonName": this.getSeasonName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeJoinedSeasonGatheringsRequest;
}());
exports.default = DescribeJoinedSeasonGatheringsRequest;
//# sourceMappingURL=DescribeJoinedSeasonGatheringsRequest.js.map