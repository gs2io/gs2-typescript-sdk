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
var DeleteJobByUserIdRequest = /** @class */ (function () {
    function DeleteJobByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.jobName = null;
    }
    DeleteJobByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteJobByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteJobByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteJobByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteJobByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.getJobName = function () {
        return this.jobName;
    };
    DeleteJobByUserIdRequest.prototype.setJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    DeleteJobByUserIdRequest.prototype.withJobName = function (jobName) {
        this.jobName = jobName;
        return this;
    };
    DeleteJobByUserIdRequest.fromDict = function (data) {
        return new DeleteJobByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withJobName(data["jobName"]);
    };
    DeleteJobByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "jobName": this.getJobName(),
        };
    };
    return DeleteJobByUserIdRequest;
}());
exports.default = DeleteJobByUserIdRequest;
//# sourceMappingURL=DeleteJobByUserIdRequest.js.map