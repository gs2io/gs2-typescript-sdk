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
var GetJobByUserIdRequest = /** @class */ (function () {
    function GetJobByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.jobName = null;
        this.timeOffsetToken = null;
    }
    GetJobByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJobByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJobByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJobByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetJobByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJobByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJobByUserIdRequest.prototype.getJobName = function () {
        return this.jobName;
    };
    GetJobByUserIdRequest.prototype.setJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobByUserIdRequest.prototype.withJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetJobByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJobByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJobByUserIdRequest.fromDict = function (data) {
        return new GetJobByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withJobName(data["jobName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetJobByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "jobName": this.getJobName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetJobByUserIdRequest;
}());
exports.default = GetJobByUserIdRequest;
//# sourceMappingURL=GetJobByUserIdRequest.js.map