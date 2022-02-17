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
var RunStampSheetWithoutNamespaceResult = /** @class */ (function () {
    function RunStampSheetWithoutNamespaceResult() {
        this.result = null;
    }
    RunStampSheetWithoutNamespaceResult.prototype.getResult = function () {
        return this.result;
    };
    RunStampSheetWithoutNamespaceResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampSheetWithoutNamespaceResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampSheetWithoutNamespaceResult.fromDict = function (data) {
        return new RunStampSheetWithoutNamespaceResult()
            .withResult(data["result"]);
    };
    RunStampSheetWithoutNamespaceResult.prototype.toDict = function () {
        return {
            "result": this.getResult(),
        };
    };
    return RunStampSheetWithoutNamespaceResult;
}());
export default RunStampSheetWithoutNamespaceResult;
//# sourceMappingURL=RunStampSheetWithoutNamespaceResult.js.map