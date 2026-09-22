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
var DescribeUserDataByUserIdRequest = /** @class */ (function () {
    function DescribeUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeUserDataByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeUserDataByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeUserDataByUserIdRequest.fromDict = function (data) {
        return new DescribeUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeUserDataByUserIdRequest;
}());
exports.default = DescribeUserDataByUserIdRequest;
//# sourceMappingURL=DescribeUserDataByUserIdRequest.js.map