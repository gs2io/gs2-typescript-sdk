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
var GetJobResultByUserIdRequest = /** @class */ (function () {
    function GetJobResultByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.jobName = null;
        this.tryNumber = null;
        this.timeOffsetToken = null;
    }
    GetJobResultByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJobResultByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJobResultByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJobResultByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetJobResultByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getJobName = function () {
        return this.jobName;
    };
    GetJobResultByUserIdRequest.prototype.setJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getTryNumber = function () {
        return this.tryNumber;
    };
    GetJobResultByUserIdRequest.prototype.setTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetJobResultByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJobResultByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJobResultByUserIdRequest.fromDict = function (data) {
        return new GetJobResultByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withJobName(data["jobName"])
            .withTryNumber(data["tryNumber"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetJobResultByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "jobName": this.getJobName(),
            "tryNumber": this.getTryNumber(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetJobResultByUserIdRequest;
}());
exports.default = GetJobResultByUserIdRequest;
//# sourceMappingURL=GetJobResultByUserIdRequest.js.map