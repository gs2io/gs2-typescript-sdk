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
var JobResultBody = /** @class */ (function () {
    function JobResultBody() {
        this.tryNumber = null;
        this.statusCode = null;
        this.result = null;
        this.tryAt = null;
    }
    JobResultBody.prototype.getTryNumber = function () {
        return this.tryNumber;
    };
    JobResultBody.prototype.setTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    JobResultBody.prototype.withTryNumber = function (tryNumber) {
        this.tryNumber = tryNumber;
        return this;
    };
    JobResultBody.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    JobResultBody.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    JobResultBody.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    JobResultBody.prototype.getResult = function () {
        return this.result;
    };
    JobResultBody.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    JobResultBody.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    JobResultBody.prototype.getTryAt = function () {
        return this.tryAt;
    };
    JobResultBody.prototype.setTryAt = function (tryAt) {
        this.tryAt = tryAt;
        return this;
    };
    JobResultBody.prototype.withTryAt = function (tryAt) {
        this.tryAt = tryAt;
        return this;
    };
    JobResultBody.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new JobResultBody()
            .withTryNumber(data["tryNumber"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"])
            .withTryAt(data["tryAt"]);
    };
    JobResultBody.prototype.toDict = function () {
        return {
            "tryNumber": this.getTryNumber(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
            "tryAt": this.getTryAt(),
        };
    };
    return JobResultBody;
}());
exports.default = JobResultBody;
//# sourceMappingURL=JobResultBody.js.map