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
var DescribeJoinedSeasonGatheringsByUserIdRequest = /** @class */ (function () {
    function DescribeJoinedSeasonGatheringsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.seasonName = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.fromDict = function (data) {
        return new DescribeJoinedSeasonGatheringsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSeasonName(data["seasonName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeJoinedSeasonGatheringsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "seasonName": this.getSeasonName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeJoinedSeasonGatheringsByUserIdRequest;
}());
exports.default = DescribeJoinedSeasonGatheringsByUserIdRequest;
//# sourceMappingURL=DescribeJoinedSeasonGatheringsByUserIdRequest.js.map