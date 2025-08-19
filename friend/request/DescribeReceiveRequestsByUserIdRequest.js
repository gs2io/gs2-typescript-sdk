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
var DescribeReceiveRequestsByUserIdRequest = /** @class */ (function () {
    function DescribeReceiveRequestsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeReceiveRequestsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeReceiveRequestsByUserIdRequest.fromDict = function (data) {
        return new DescribeReceiveRequestsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeReceiveRequestsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeReceiveRequestsByUserIdRequest;
}());
exports.default = DescribeReceiveRequestsByUserIdRequest;
//# sourceMappingURL=DescribeReceiveRequestsByUserIdRequest.js.map