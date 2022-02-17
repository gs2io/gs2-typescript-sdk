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
var RunStampTaskResult = /** @class */ (function () {
    function RunStampTaskResult() {
        this.contextStack = null;
        this.result = null;
    }
    RunStampTaskResult.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampTaskResult.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskResult.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskResult.prototype.getResult = function () {
        return this.result;
    };
    RunStampTaskResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampTaskResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampTaskResult.fromDict = function (data) {
        return new RunStampTaskResult()
            .withContextStack(data["contextStack"])
            .withResult(data["result"]);
    };
    RunStampTaskResult.prototype.toDict = function () {
        return {
            "contextStack": this.getContextStack(),
            "result": this.getResult(),
        };
    };
    return RunStampTaskResult;
}());
exports.default = RunStampTaskResult;
//# sourceMappingURL=RunStampTaskResult.js.map