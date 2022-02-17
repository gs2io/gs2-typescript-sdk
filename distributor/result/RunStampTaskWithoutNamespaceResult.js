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
var RunStampTaskWithoutNamespaceResult = /** @class */ (function () {
    function RunStampTaskWithoutNamespaceResult() {
        this.contextStack = null;
        this.result = null;
    }
    RunStampTaskWithoutNamespaceResult.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunStampTaskWithoutNamespaceResult.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskWithoutNamespaceResult.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunStampTaskWithoutNamespaceResult.prototype.getResult = function () {
        return this.result;
    };
    RunStampTaskWithoutNamespaceResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampTaskWithoutNamespaceResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    RunStampTaskWithoutNamespaceResult.fromDict = function (data) {
        return new RunStampTaskWithoutNamespaceResult()
            .withContextStack(data["contextStack"])
            .withResult(data["result"]);
    };
    RunStampTaskWithoutNamespaceResult.prototype.toDict = function () {
        return {
            "contextStack": this.getContextStack(),
            "result": this.getResult(),
        };
    };
    return RunStampTaskWithoutNamespaceResult;
}());
export default RunStampTaskWithoutNamespaceResult;
//# sourceMappingURL=RunStampTaskWithoutNamespaceResult.js.map