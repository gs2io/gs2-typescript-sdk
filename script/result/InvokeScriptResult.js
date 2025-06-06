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
var Gs2Core = tslib_1.__importStar(require("../../core"));
var InvokeScriptResult = /** @class */ (function () {
    function InvokeScriptResult() {
        this.code = null;
        this.result = null;
        this.transaction = null;
        this.randomStatus = null;
        this.atomicCommit = null;
        this.transactionResult = null;
        this.executeTime = null;
        this.charged = null;
        this.output = null;
    }
    InvokeScriptResult.prototype.getCode = function () {
        return this.code;
    };
    InvokeScriptResult.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    InvokeScriptResult.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    InvokeScriptResult.prototype.getResult = function () {
        return this.result;
    };
    InvokeScriptResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    InvokeScriptResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    InvokeScriptResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    InvokeScriptResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    InvokeScriptResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    InvokeScriptResult.prototype.getRandomStatus = function () {
        return this.randomStatus;
    };
    InvokeScriptResult.prototype.setRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    InvokeScriptResult.prototype.withRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    InvokeScriptResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    InvokeScriptResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    InvokeScriptResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    InvokeScriptResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    InvokeScriptResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    InvokeScriptResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    InvokeScriptResult.prototype.getExecuteTime = function () {
        return this.executeTime;
    };
    InvokeScriptResult.prototype.setExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    InvokeScriptResult.prototype.withExecuteTime = function (executeTime) {
        this.executeTime = executeTime;
        return this;
    };
    InvokeScriptResult.prototype.getCharged = function () {
        return this.charged;
    };
    InvokeScriptResult.prototype.setCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    InvokeScriptResult.prototype.withCharged = function (charged) {
        this.charged = charged;
        return this;
    };
    InvokeScriptResult.prototype.getOutput = function () {
        return this.output;
    };
    InvokeScriptResult.prototype.setOutput = function (output) {
        this.output = output;
        return this;
    };
    InvokeScriptResult.prototype.withOutput = function (output) {
        this.output = output;
        return this;
    };
    InvokeScriptResult.fromDict = function (data) {
        return new InvokeScriptResult()
            .withCode(data["code"])
            .withResult(data["result"])
            .withTransaction(Gs2Script.Transaction.fromDict(data["transaction"]))
            .withRandomStatus(Gs2Script.RandomStatus.fromDict(data["randomStatus"]))
            .withAtomicCommit(data["atomicCommit"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]))
            .withExecuteTime(data["executeTime"])
            .withCharged(data["charged"])
            .withOutput(data.output ?
            data.output.map(function (item) {
                return item;
            }) : null);
    };
    InvokeScriptResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "code": this.getCode(),
            "result": this.getResult(),
            "transaction": (_a = this.getTransaction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "randomStatus": (_b = this.getRandomStatus()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "atomicCommit": this.getAtomicCommit(),
            "transactionResult": (_c = this.getTransactionResult()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "executeTime": this.getExecuteTime(),
            "charged": this.getCharged(),
            "output": this.getOutput() ?
                this.getOutput().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return InvokeScriptResult;
}());
exports.default = InvokeScriptResult;
//# sourceMappingURL=InvokeScriptResult.js.map