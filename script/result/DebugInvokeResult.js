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
var DebugInvokeResult = /** @class */ (function () {
    function DebugInvokeResult() {
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
    DebugInvokeResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    DebugInvokeResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DebugInvokeResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DebugInvokeResult.prototype.getRandomStatus = function () {
        return this.randomStatus;
    };
    DebugInvokeResult.prototype.setRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    DebugInvokeResult.prototype.withRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    DebugInvokeResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    DebugInvokeResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DebugInvokeResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DebugInvokeResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    DebugInvokeResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DebugInvokeResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
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
    DebugInvokeResult.prototype.toDict = function () {
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
    return DebugInvokeResult;
}());
exports.default = DebugInvokeResult;
//# sourceMappingURL=DebugInvokeResult.js.map