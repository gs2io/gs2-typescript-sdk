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
var RunStampSheetExpressResult = /** @class */ (function () {
    function RunStampSheetExpressResult() {
        this.taskResults = null;
        this.sheetResult = null;
    }
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
            .withTaskResults(data.taskResults ?
            data.taskResults.map(function (item) {
                return item;
            }) : [])
            .withSheetResult(data["sheetResult"]);
    };
    RunStampSheetExpressResult.prototype.toDict = function () {
        return {
            "taskResults": this.getTaskResults() ?
                this.getTaskResults().map(function (item) {
                    return item;
                }) : [],
            "sheetResult": this.getSheetResult(),
        };
    };
    return RunStampSheetExpressResult;
}());
export default RunStampSheetExpressResult;
//# sourceMappingURL=RunStampSheetExpressResult.js.map