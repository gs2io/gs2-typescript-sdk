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
var JobResult = /** @class */ (function () {
    function JobResult() {
        this.jobResultId = null;
        this.jobId = null;
        this.tryNumber = null;
        this.statusCode = null;
        this.result = null;
        this.tryAt = null;
    }
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
            .withTryNumber(data["tryNumber"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"])
            .withTryAt(data["tryAt"]);
    };
    JobResult.prototype.toDict = function () {
        return {
            "jobResultId": this.getJobResultId(),
            "jobId": this.getJobId(),
            "tryNumber": this.getTryNumber(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
            "tryAt": this.getTryAt(),
        };
    };
    return JobResult;
}());
export default JobResult;
//# sourceMappingURL=JobResult.js.map