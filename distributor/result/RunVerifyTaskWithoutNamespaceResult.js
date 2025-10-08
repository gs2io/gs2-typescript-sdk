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
var RunVerifyTaskWithoutNamespaceResult = /** @class */ (function () {
    function RunVerifyTaskWithoutNamespaceResult() {
        this.contextStack = null;
        this.statusCode = null;
        this.result = null;
    }
    RunVerifyTaskWithoutNamespaceResult.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.getResult = function () {
        return this.result;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunVerifyTaskWithoutNamespaceResult.fromDict = function (data) {
        return new RunVerifyTaskWithoutNamespaceResult()
            .withContextStack(data["contextStack"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"]);
    };
    RunVerifyTaskWithoutNamespaceResult.prototype.toDict = function () {
        return {
            "contextStack": this.getContextStack(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
        };
    };
    return RunVerifyTaskWithoutNamespaceResult;
}());
exports.default = RunVerifyTaskWithoutNamespaceResult;
//# sourceMappingURL=RunVerifyTaskWithoutNamespaceResult.js.map