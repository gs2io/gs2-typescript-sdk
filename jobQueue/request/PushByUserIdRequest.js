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
import * as Gs2JobQueue from '../model';
var PushByUserIdRequest = /** @class */ (function () {
    function PushByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.jobs = null;
    }
    PushByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PushByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PushByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PushByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PushByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PushByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PushByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PushByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PushByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PushByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PushByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PushByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PushByUserIdRequest.prototype.getJobs = function () {
        return this.jobs;
    };
    PushByUserIdRequest.prototype.setJobs = function (jobs) {
        this.jobs = jobs;
        return this;
    };
    PushByUserIdRequest.prototype.withJobs = function (jobs) {
        this.jobs = jobs;
        return this;
    };
    PushByUserIdRequest.fromDict = function (data) {
        return new PushByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withJobs(data.jobs ?
            data.jobs.map(function (item) {
                return Gs2JobQueue.JobEntry.fromDict(item);
            }) : []);
    };
    PushByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "jobs": this.getJobs() ?
                this.getJobs().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return PushByUserIdRequest;
}());
export default PushByUserIdRequest;
//# sourceMappingURL=PushByUserIdRequest.js.map