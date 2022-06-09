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
var grnFormat = "grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}";
var JobResult = /** @class */ (function () {
    function JobResult() {
        this.jobResultId = null;
        this.jobId = null;
        this.scriptId = null;
        this.args = null;
        this.tryNumber = null;
        this.statusCode = null;
        this.result = null;
        this.tryAt = null;
    }
    JobResult.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.getJobName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '(.*)')
            .replace('{tryNumber}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.getTryNumber = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    JobResult.isValid = function (grn) {
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
        if (this.getTryNumber(grn) == null || this.getTryNumber(grn) === '') {
            return false;
        }
        return true;
    };
    JobResult.createGrn = function (region, ownerId, namespaceName, userId, jobName, tryNumber) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{jobName}', jobName !== null && jobName !== void 0 ? jobName : '')
            .replace('{tryNumber}', tryNumber !== null && tryNumber !== void 0 ? tryNumber : '');
    };
    JobResult.prototype.getJobResultId = function () {
        return this.jobResultId;
    };
    JobResult.prototype.setJobResultId = function (jobResultId) {
        this.jobResultId = jobResultId;
        return this;
    };
    JobResult.prototype.withJobResultId = function (jobResultId) {
        this.jobResultId = jobResultId;
        return this;
    };
    JobResult.prototype.getJobId = function () {
        return this.jobId;
    };
    JobResult.prototype.setJobId = function (jobId) {
        this.jobId = jobId;
        return this;
    };
    JobResult.prototype.withJobId = function (jobId) {
        this.jobId = jobId;
        return this;
    };
    JobResult.prototype.getScriptId = function () {
        return this.scriptId;
    };
    JobResult.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    JobResult.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    JobResult.prototype.getArgs = function () {
        return this.args;
    };
    JobResult.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    JobResult.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    JobResult.prototype.getTryNumber = function () {
        return this.tryNumber;
    };
    JobResult.prototype.setTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    JobResult.prototype.withTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    JobResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    JobResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    JobResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    JobResult.prototype.getResult = function () {
        return this.result;
    };
    JobResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    JobResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    JobResult.prototype.getTryAt = function () {
        return this.tryAt;
    };
    JobResult.prototype.setTryAt = function (tryAt) {
        this.tryAt = tryAt;
        return this;
    };
    JobResult.prototype.withTryAt = function (tryAt) {
        this.tryAt = tryAt;
        return this;
    };
    JobResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new JobResult()
            .withJobResultId(data["jobResultId"])
            .withJobId(data["jobId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withTryNumber(data["tryNumber"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"])
            .withTryAt(data["tryAt"]);
    };
    JobResult.prototype.toDict = function () {
        return {
            "jobResultId": this.getJobResultId(),
            "jobId": this.getJobId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "tryNumber": this.getTryNumber(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
            "tryAt": this.getTryAt(),
        };
    };
    return JobResult;
}());
exports.default = JobResult;
//# sourceMappingURL=JobResult.js.map