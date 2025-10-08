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
var DescribeRandomDisplayItemsByUserIdRequest = /** @class */ (function () {
    function DescribeRandomDisplayItemsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeRandomDisplayItemsByUserIdRequest.fromDict = function (data) {
        return new DescribeRandomDisplayItemsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeRandomDisplayItemsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeRandomDisplayItemsByUserIdRequest;
}());
exports.default = DescribeRandomDisplayItemsByUserIdRequest;
//# sourceMappingURL=DescribeRandomDisplayItemsByUserIdRequest.js.map