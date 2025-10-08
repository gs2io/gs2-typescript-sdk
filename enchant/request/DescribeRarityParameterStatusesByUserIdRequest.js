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
var DescribeRarityParameterStatusesByUserIdRequest = /** @class */ (function () {
    function DescribeRarityParameterStatusesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.parameterName = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeRarityParameterStatusesByUserIdRequest.fromDict = function (data) {
        return new DescribeRarityParameterStatusesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeRarityParameterStatusesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeRarityParameterStatusesByUserIdRequest;
}());
exports.default = DescribeRarityParameterStatusesByUserIdRequest;
//# sourceMappingURL=DescribeRarityParameterStatusesByUserIdRequest.js.map