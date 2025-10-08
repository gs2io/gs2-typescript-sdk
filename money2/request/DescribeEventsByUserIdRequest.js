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
var DescribeEventsByUserIdRequest = /** @class */ (function () {
    function DescribeEventsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.begin = null;
        this.end = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeEventsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeEventsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeEventsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeEventsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeEventsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getBegin = function () {
        return this.begin;
    };
    DescribeEventsByUserIdRequest.prototype.setBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withBegin = function (begin) {
        this.begin = begin;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getEnd = function () {
        return this.end;
    };
    DescribeEventsByUserIdRequest.prototype.setEnd = function (end) {
        this.end = end;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withEnd = function (end) {
        this.end = end;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeEventsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeEventsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeEventsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeEventsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeEventsByUserIdRequest.fromDict = function (data) {
        return new DescribeEventsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeEventsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeEventsByUserIdRequest;
}());
exports.default = DescribeEventsByUserIdRequest;
//# sourceMappingURL=DescribeEventsByUserIdRequest.js.map