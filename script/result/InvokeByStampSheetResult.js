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
var tslib_1 = require("tslib");
var Gs2Script = tslib_1.__importStar(require("../model"));
var InvokeByStampSheetResult = /** @class */ (function () {
    function InvokeByStampSheetResult() {
        this.code = null;
        this.result = null;
        this.transaction = null;
        this.randomStatus = null;
        this.executeTime = null;
        this.charged = null;
        this.output = null;
    }
    InvokeByStampSheetResult.prototype.getCode = function () {
        return this.code;
    };
    InvokeByStampSheetResult.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    InvokeByStampSheetResult.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    InvokeByStampSheetResult.prototype.getResult = function () {
        return this.result;
    };
    InvokeByStampSheetResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    InvokeByStampSheetResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    InvokeByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    InvokeByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    InvokeByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    InvokeByStampSheetResult.prototype.getRandomStatus = function () {
        return this.randomStatus;
    };
    InvokeByStampSheetResult.prototype.setRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    InvokeByStampSheetResult.prototype.withRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    InvokeByStampSheetResult.prototype.getExecuteTime = function () {
        return this.executeTime;
    };
    InvokeByStampSheetResult.prototype.setExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    InvokeByStampSheetResult.prototype.withExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    InvokeByStampSheetResult.prototype.getCharged = function () {
        return this.charged;
    };
    InvokeByStampSheetResult.prototype.setCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    InvokeByStampSheetResult.prototype.withCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    InvokeByStampSheetResult.prototype.getOutput = function () {
        return this.output;
    };
    InvokeByStampSheetResult.prototype.setOutput = function (output) {
        this.output = output;
        return this;
    };
    InvokeByStampSheetResult.prototype.withOutput = function (output) {
        this.output = output;
        return this;
    };
    InvokeByStampSheetResult.fromDict = function (data) {
        return new InvokeByStampSheetResult()
            .withCode(data["code"])
            .withResult(data["result"])
            .withTransaction(Gs2Script.Transaction.fromDict(data["transaction"]))
            .withRandomStatus(Gs2Script.RandomStatus.fromDict(data["randomStatus"]))
            .withExecuteTime(data["executeTime"])
            .withCharged(data["charged"])
            .withOutput(data.output ?
            data.output.map(function (item) {
                return item;
            }) : []);
    };
    InvokeByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "code": this.getCode(),
            "result": this.getResult(),
            "transaction": (_a = this.getTransaction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "randomStatus": (_b = this.getRandomStatus()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "executeTime": this.getExecuteTime(),
            "charged": this.getCharged(),
            "output": this.getOutput() ?
                this.getOutput().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return InvokeByStampSheetResult;
}());
exports.default = InvokeByStampSheetResult;
//# sourceMappingURL=InvokeByStampSheetResult.js.map