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
var IssueTimeOffsetTokenByUserIdRequest = /** @class */ (function () {
    function IssueTimeOffsetTokenByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffset = null;
        this.timeOffsetToken = null;
    }
    IssueTimeOffsetTokenByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IssueTimeOffsetTokenByUserIdRequest.fromDict = function (data) {
        return new IssueTimeOffsetTokenByUserIdRequest()
            .withUserId(data["userId"])
            .withTimeOffset(data["timeOffset"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    IssueTimeOffsetTokenByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffset": this.getTimeOffset(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return IssueTimeOffsetTokenByUserIdRequest;
}());
exports.default = IssueTimeOffsetTokenByUserIdRequest;
//# sourceMappingURL=IssueTimeOffsetTokenByUserIdRequest.js.map