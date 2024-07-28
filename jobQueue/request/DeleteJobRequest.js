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
var DeleteJobRequest = /** @class */ (function () {
    function DeleteJobRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.jobName = null;
        this.duplicationAvoider = null;
    }
    DeleteJobRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteJobRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteJobRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteJobRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteJobRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteJobRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteJobRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteJobRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteJobRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteJobRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteJobRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteJobRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteJobRequest.prototype.getJobName = function () {
        return this.jobName;
    };
    DeleteJobRequest.prototype.setJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    DeleteJobRequest.prototype.withJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    DeleteJobRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteJobRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteJobRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteJobRequest.fromDict = function (data) {
        return new DeleteJobRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withJobName(data["jobName"]);
    };
    DeleteJobRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "jobName": this.getJobName(),
        };
    };
    return DeleteJobRequest;
}());
exports.default = DeleteJobRequest;
//# sourceMappingURL=DeleteJobRequest.js.map