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
var RunStampSheetExpressResult = /** @class */ (function () {
    function RunStampSheetExpressResult() {
        this.verifyTaskResultCodes = null;
        this.verifyTaskResults = null;
        this.taskResultCodes = null;
        this.taskResults = null;
        this.sheetResultCode = null;
        this.sheetResult = null;
    }
    RunStampSheetExpressResult.prototype.getVerifyTaskResultCodes = function () {
        return this.verifyTaskResultCodes;
    };
    RunStampSheetExpressResult.prototype.setVerifyTaskResultCodes = function (verifyTaskResultCodes) {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    };
    RunStampSheetExpressResult.prototype.withVerifyTaskResultCodes = function (verifyTaskResultCodes) {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    };
    RunStampSheetExpressResult.prototype.getVerifyTaskResults = function () {
        return this.verifyTaskResults;
    };
    RunStampSheetExpressResult.prototype.setVerifyTaskResults = function (verifyTaskResults) {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    };
    RunStampSheetExpressResult.prototype.withVerifyTaskResults = function (verifyTaskResults) {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    };
    RunStampSheetExpressResult.prototype.getTaskResultCodes = function () {
        return this.taskResultCodes;
    };
    RunStampSheetExpressResult.prototype.setTaskResultCodes = function (taskResultCodes) {
        this.taskResultCodes = taskResultCodes;
        return this;
    };
    RunStampSheetExpressResult.prototype.withTaskResultCodes = function (taskResultCodes) {
        this.taskResultCodes = taskResultCodes;
        return this;
    };
    RunStampSheetExpressResult.prototype.getTaskResults = function () {
        return this.taskResults;
    };
    RunStampSheetExpressResult.prototype.setTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    RunStampSheetExpressResult.prototype.withTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    RunStampSheetExpressResult.prototype.getSheetResultCode = function () {
        return this.sheetResultCode;
    };
    RunStampSheetExpressResult.prototype.setSheetResultCode = function (sheetResultCode) {
        this.sheetResultCode = sheetResultCode;
        return this;
    };
    RunStampSheetExpressResult.prototype.withSheetResultCode = function (sheetResultCode) {
        this.sheetResultCode = sheetResultCode;
        return this;
    };
    RunStampSheetExpressResult.prototype.getSheetResult = function () {
        return this.sheetResult;
    };
    RunStampSheetExpressResult.prototype.setSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    RunStampSheetExpressResult.prototype.withSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    RunStampSheetExpressResult.fromDict = function (data) {
        return new RunStampSheetExpressResult()
            .withVerifyTaskResultCodes(data.verifyTaskResultCodes ?
            data.verifyTaskResultCodes.map(function (item) {
                return item;
            }) : null)
            .withVerifyTaskResults(data.verifyTaskResults ?
            data.verifyTaskResults.map(function (item) {
                return item;
            }) : null)
            .withTaskResultCodes(data.taskResultCodes ?
            data.taskResultCodes.map(function (item) {
                return item;
            }) : null)
            .withTaskResults(data.taskResults ?
            data.taskResults.map(function (item) {
                return item;
            }) : null)
            .withSheetResultCode(data["sheetResultCode"])
            .withSheetResult(data["sheetResult"]);
    };
    RunStampSheetExpressResult.prototype.toDict = function () {
        return {
            "verifyTaskResultCodes": this.getVerifyTaskResultCodes() ?
                this.getVerifyTaskResultCodes().map(function (item) {
                    return item;
                }) : null,
            "verifyTaskResults": this.getVerifyTaskResults() ?
                this.getVerifyTaskResults().map(function (item) {
                    return item;
                }) : null,
            "taskResultCodes": this.getTaskResultCodes() ?
                this.getTaskResultCodes().map(function (item) {
                    return item;
                }) : null,
            "taskResults": this.getTaskResults() ?
                this.getTaskResults().map(function (item) {
                    return item;
                }) : null,
            "sheetResultCode": this.getSheetResultCode(),
            "sheetResult": this.getSheetResult(),
        };
    };
    return RunStampSheetExpressResult;
}());
exports.default = RunStampSheetExpressResult;
//# sourceMappingURL=RunStampSheetExpressResult.js.map