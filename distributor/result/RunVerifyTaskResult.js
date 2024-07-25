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
var RunVerifyTaskResult = /** @class */ (function () {
    function RunVerifyTaskResult() {
        this.contextStack = null;
        this.statusCode = null;
        this.result = null;
    }
    RunVerifyTaskResult.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunVerifyTaskResult.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskResult.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    RunVerifyTaskResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    RunVerifyTaskResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    RunVerifyTaskResult.prototype.getResult = function () {
        return this.result;
    };
    RunVerifyTaskResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunVerifyTaskResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunVerifyTaskResult.fromDict = function (data) {
        return new RunVerifyTaskResult()
            .withContextStack(data["contextStack"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"]);
    };
    RunVerifyTaskResult.prototype.toDict = function () {
        return {
            "contextStack": this.getContextStack(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
        };
    };
    return RunVerifyTaskResult;
}());
exports.default = RunVerifyTaskResult;
//# sourceMappingURL=RunVerifyTaskResult.js.map