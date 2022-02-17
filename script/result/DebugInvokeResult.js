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
var DebugInvokeResult = /** @class */ (function () {
    function DebugInvokeResult() {
        this.code = null;
        this.result = null;
        this.executeTime = null;
        this.charged = null;
        this.output = null;
    }
    DebugInvokeResult.prototype.getCode = function () {
        return this.code;
    };
    DebugInvokeResult.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    DebugInvokeResult.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    DebugInvokeResult.prototype.getResult = function () {
        return this.result;
    };
    DebugInvokeResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    DebugInvokeResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    DebugInvokeResult.prototype.getExecuteTime = function () {
        return this.executeTime;
    };
    DebugInvokeResult.prototype.setExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    DebugInvokeResult.prototype.withExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    DebugInvokeResult.prototype.getCharged = function () {
        return this.charged;
    };
    DebugInvokeResult.prototype.setCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    DebugInvokeResult.prototype.withCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    DebugInvokeResult.prototype.getOutput = function () {
        return this.output;
    };
    DebugInvokeResult.prototype.setOutput = function (output) {
        this.output = output;
        return this;
    };
    DebugInvokeResult.prototype.withOutput = function (output) {
        this.output = output;
        return this;
    };
    DebugInvokeResult.fromDict = function (data) {
        return new DebugInvokeResult()
            .withCode(data["code"])
            .withResult(data["result"])
            .withExecuteTime(data["executeTime"])
            .withCharged(data["charged"])
            .withOutput(data.output ?
            data.output.map(function (item) {
                return item;
            }) : []);
    };
    DebugInvokeResult.prototype.toDict = function () {
        return {
            "code": this.getCode(),
            "result": this.getResult(),
            "executeTime": this.getExecuteTime(),
            "charged": this.getCharged(),
            "output": this.getOutput() ?
                this.getOutput().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return DebugInvokeResult;
}());
export default DebugInvokeResult;
//# sourceMappingURL=DebugInvokeResult.js.map