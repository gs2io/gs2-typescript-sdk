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
var RunStampSheetResult = /** @class */ (function () {
    function RunStampSheetResult() {
        this.result = null;
    }
    RunStampSheetResult.prototype.getResult = function () {
        return this.result;
    };
    RunStampSheetResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampSheetResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampSheetResult.fromDict = function (data) {
        return new RunStampSheetResult()
            .withResult(data["result"]);
    };
    RunStampSheetResult.prototype.toDict = function () {
        return {
            "result": this.getResult(),
        };
    };
    return RunStampSheetResult;
}());
exports.default = RunStampSheetResult;
//# sourceMappingURL=RunStampSheetResult.js.map