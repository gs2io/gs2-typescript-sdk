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
var RunStampSheetExpressWithoutNamespaceResult = /** @class */ (function () {
    function RunStampSheetExpressWithoutNamespaceResult() {
        this.taskResults = null;
        this.sheetResult = null;
    }
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
            .withTaskResults(data.taskResults ?
            data.taskResults.map(function (item) {
                return item;
            }) : [])
            .withSheetResult(data["sheetResult"]);
    };
    RunStampSheetExpressWithoutNamespaceResult.prototype.toDict = function () {
        return {
            "taskResults": this.getTaskResults() ?
                this.getTaskResults().map(function (item) {
                    return item;
                }) : [],
            "sheetResult": this.getSheetResult(),
        };
    };
    return RunStampSheetExpressWithoutNamespaceResult;
}());
export default RunStampSheetExpressWithoutNamespaceResult;
//# sourceMappingURL=RunStampSheetExpressWithoutNamespaceResult.js.map