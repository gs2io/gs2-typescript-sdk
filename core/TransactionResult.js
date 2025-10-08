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
var VerifyActionResult_1 = tslib_1.__importDefault(require("./VerifyActionResult"));
var ConsumeActionResult_1 = tslib_1.__importDefault(require("./ConsumeActionResult"));
var AcquireActionResult_1 = tslib_1.__importDefault(require("./AcquireActionResult"));
var TransactionResult = /** @class */ (function () {
    function TransactionResult() {
        this.transactionId = null;
        this.verifyResults = null;
        this.consumeResults = null;
        this.acquireResults = null;
    }
    TransactionResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    TransactionResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    TransactionResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    TransactionResult.prototype.getVerifyResults = function () {
        return this.verifyResults;
    };
    TransactionResult.prototype.setVerifyResults = function (verifyResults) {
        this.verifyResults = verifyResults;
        return this;
    };
    TransactionResult.prototype.withVerifyResults = function (verifyResults) {
        this.verifyResults = verifyResults;
        return this;
    };
    TransactionResult.prototype.getConsumeResults = function () {
        return this.consumeResults;
    };
    TransactionResult.prototype.setConsumeResults = function (consumeResults) {
        this.consumeResults = consumeResults;
        return this;
    };
    TransactionResult.prototype.withConsumeResults = function (consumeResults) {
        this.consumeResults = consumeResults;
        return this;
    };
    TransactionResult.prototype.getAcquireResults = function () {
        return this.acquireResults;
    };
    TransactionResult.prototype.setAcquireResults = function (acquireResults) {
        this.acquireResults = acquireResults;
        return this;
    };
    TransactionResult.prototype.withAcquireResults = function (acquireResults) {
        this.acquireResults = acquireResults;
        return this;
    };
    TransactionResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionResult()
            .withTransactionId(data["transactionId"])
            .withVerifyResults(data.verifyResults ?
            data.verifyResults.map(function (item) {
                return VerifyActionResult_1.default.fromDict(item);
            }) : [])
            .withConsumeResults(data.consumeResults ?
            data.consumeResults.map(function (item) {
                return ConsumeActionResult_1.default.fromDict(item);
            }) : [])
            .withAcquireResults(data.acquireResults ?
            data.acquireResults.map(function (item) {
                return AcquireActionResult_1.default.fromDict(item);
            }) : []);
    };
    TransactionResult.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "verifyResults": this.getVerifyResults() ?
                this.getVerifyResults().map(function (item) {
                    return item.toDict();
                }) : [],
            "consumeResults": this.getConsumeResults() ?
                this.getConsumeResults().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireResults": this.getAcquireResults() ?
                this.getAcquireResults().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return TransactionResult;
}());
exports.default = TransactionResult;
//# sourceMappingURL=TransactionResult.js.map