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
var GetJobResultRequest = /** @class */ (function () {
    function GetJobResultRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.jobName = null;
        this.tryNumber = null;
    }
    GetJobResultRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJobResultRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobResultRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJobResultRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJobResultRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobResultRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJobResultRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJobResultRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobResultRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJobResultRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetJobResultRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJobResultRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJobResultRequest.prototype.getJobName = function () {
        return this.jobName;
    };
    GetJobResultRequest.prototype.setJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobResultRequest.prototype.withJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    GetJobResultRequest.prototype.getTryNumber = function () {
        return this.tryNumber;
    };
    GetJobResultRequest.prototype.setTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    GetJobResultRequest.prototype.withTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    GetJobResultRequest.fromDict = function (data) {
        return new GetJobResultRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withJobName(data["jobName"])
            .withTryNumber(data["tryNumber"]);
    };
    GetJobResultRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "jobName": this.getJobName(),
            "tryNumber": this.getTryNumber(),
        };
    };
    return GetJobResultRequest;
}());
exports.default = GetJobResultRequest;
//# sourceMappingURL=GetJobResultRequest.js.map