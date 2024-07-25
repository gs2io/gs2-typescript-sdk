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
var RunStampSheetExpressWithoutNamespaceResult = /** @class */ (function () {
    function RunStampSheetExpressWithoutNamespaceResult() {
        this.verifyTaskResultCodes = null;
        this.verifyTaskResults = null;
        this.taskResultCodes = null;
        this.taskResults = null;
        this.sheetResultCode = null;
        this.sheetResult = null;
    }
    RunStampSheetExpressWithoutNamespaceResult.prototype.getVerifyTaskResultCodes = function () {
        return this.verifyTaskResultCodes;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setVerifyTaskResultCodes = function (verifyTaskResultCodes) {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withVerifyTaskResultCodes = function (verifyTaskResultCodes) {
        this.verifyTaskResultCodes = verifyTaskResultCodes;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.getVerifyTaskResults = function () {
        return this.verifyTaskResults;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setVerifyTaskResults = function (verifyTaskResults) {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withVerifyTaskResults = function (verifyTaskResults) {
        this.verifyTaskResults = verifyTaskResults;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.getTaskResultCodes = function () {
        return this.taskResultCodes;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setTaskResultCodes = function (taskResultCodes) {
        this.taskResultCodes = taskResultCodes;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withTaskResultCodes = function (taskResultCodes) {
        this.taskResultCodes = taskResultCodes;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.getTaskResults = function () {
        return this.taskResults;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.getSheetResultCode = function () {
        return this.sheetResultCode;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setSheetResultCode = function (sheetResultCode) {
        this.sheetResultCode = sheetResultCode;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withSheetResultCode = function (sheetResultCode) {
        this.sheetResultCode = sheetResultCode;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.getSheetResult = function () {
        return this.sheetResult;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.setSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.withSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    RunStampSheetExpressWithoutNamespaceResult.fromDict = function (data) {
        return new RunStampSheetExpressWithoutNamespaceResult()
            .withVerifyTaskResultCodes(data.verifyTaskResultCodes ?
            data.verifyTaskResultCodes.map(function (item) {
                return item;
            }) : [])
            .withVerifyTaskResults(data.verifyTaskResults ?
            data.verifyTaskResults.map(function (item) {
                return item;
            }) : [])
            .withTaskResultCodes(data.taskResultCodes ?
            data.taskResultCodes.map(function (item) {
                return item;
            }) : [])
            .withTaskResults(data.taskResults ?
            data.taskResults.map(function (item) {
                return item;
            }) : [])
            .withSheetResultCode(data["sheetResultCode"])
            .withSheetResult(data["sheetResult"]);
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.toDict = function () {
        return {
            "verifyTaskResultCodes": this.getVerifyTaskResultCodes() ?
                this.getVerifyTaskResultCodes().map(function (item) {
                    return item;
                }) : [],
            "verifyTaskResults": this.getVerifyTaskResults() ?
                this.getVerifyTaskResults().map(function (item) {
                    return item;
                }) : [],
            "taskResultCodes": this.getTaskResultCodes() ?
                this.getTaskResultCodes().map(function (item) {
                    return item;
                }) : [],
            "taskResults": this.getTaskResults() ?
                this.getTaskResults().map(function (item) {
                    return item;
                }) : [],
            "sheetResultCode": this.getSheetResultCode(),
            "sheetResult": this.getSheetResult(),
        };
    };
    return RunStampSheetExpressWithoutNamespaceResult;
}());
exports.default = RunStampSheetExpressWithoutNamespaceResult;
//# sourceMappingURL=RunStampSheetExpressWithoutNamespaceResult.js.map