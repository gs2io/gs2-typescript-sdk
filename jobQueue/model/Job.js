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
var grnFormat = "grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}";
var Job = /** @class */ (function () {
    function Job() {
        this.jobId = null;
        this.name = null;
        this.userId = null;
        this.scriptId = null;
        this.args = null;
        this.currentRetryCount = null;
        this.maxTryCount = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Job.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Job.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Job.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Job.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{jobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Job.getJobName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Job.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getJobName(grn) == null || this.getJobName(grn) === '') {
            return false;
        }
        return true;
    };
    Job.createGrn = function (region, ownerId, namespaceName, userId, jobName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{jobName}', jobName !== null && jobName !== void 0 ? jobName : '');
    };
    Job.prototype.getJobId = function () {
        return this.jobId;
    };
    Job.prototype.setJobId = function (jobId) {
        this.jobId = jobId;
        return this;
    };
    Job.prototype.withJobId = function (jobId) {
        this.jobId = jobId;
        return this;
    };
    Job.prototype.getName = function () {
        return this.name;
    };
    Job.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Job.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Job.prototype.getUserId = function () {
        return this.userId;
    };
    Job.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Job.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Job.prototype.getScriptId = function () {
        return this.scriptId;
    };
    Job.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Job.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Job.prototype.getArgs = function () {
        return this.args;
    };
    Job.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    Job.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    Job.prototype.getCurrentRetryCount = function () {
        return this.currentRetryCount;
    };
    Job.prototype.setCurrentRetryCount = function (currentRetryCount) {
        this.currentRetryCount = currentRetryCount;
        return this;
    };
    Job.prototype.withCurrentRetryCount = function (currentRetryCount) {
        this.currentRetryCount = currentRetryCount;
        return this;
    };
    Job.prototype.getMaxTryCount = function () {
        return this.maxTryCount;
    };
    Job.prototype.setMaxTryCount = function (maxTryCount) {
        this.maxTryCount = maxTryCount;
        return this;
    };
    Job.prototype.withMaxTryCount = function (maxTryCount) {
        this.maxTryCount = maxTryCount;
        return this;
    };
    Job.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Job.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Job.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Job.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Job.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Job.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Job.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Job()
            .withJobId(data["jobId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withCurrentRetryCount(data["currentRetryCount"])
            .withMaxTryCount(data["maxTryCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Job.prototype.toDict = function () {
        return {
            "jobId": this.getJobId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "currentRetryCount": this.getCurrentRetryCount(),
            "maxTryCount": this.getMaxTryCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Job;
}());
exports.default = Job;
//# sourceMappingURL=Job.js.map