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
var DescribeLikesByUserIdRequest = /** @class */ (function () {
    function DescribeLikesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeLikesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeLikesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeLikesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeLikesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeLikesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeLikesByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeLikesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeLikesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeLikesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeLikesByUserIdRequest.fromDict = function (data) {
        return new DescribeLikesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeLikesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeLikesByUserIdRequest;
}());
exports.default = DescribeLikesByUserIdRequest;
//# sourceMappingURL=DescribeLikesByUserIdRequest.js.map