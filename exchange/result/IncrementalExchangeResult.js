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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var IncrementalExchangeResult = /** @class */ (function () {
    function IncrementalExchangeResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    IncrementalExchangeResult.prototype.getItem = function () {
        return this.item;
    };
    IncrementalExchangeResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    IncrementalExchangeResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    IncrementalExchangeResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    IncrementalExchangeResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IncrementalExchangeResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IncrementalExchangeResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    IncrementalExchangeResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncrementalExchangeResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncrementalExchangeResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    IncrementalExchangeResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    IncrementalExchangeResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    IncrementalExchangeResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    IncrementalExchangeResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    IncrementalExchangeResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    IncrementalExchangeResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    IncrementalExchangeResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    IncrementalExchangeResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    IncrementalExchangeResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    IncrementalExchangeResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    IncrementalExchangeResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    IncrementalExchangeResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    IncrementalExchangeResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    IncrementalExchangeResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    IncrementalExchangeResult.fromDict = function (data) {
        return new IncrementalExchangeResult()
            .withItem(Gs2Exchange.IncrementalRateModel.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    IncrementalExchangeResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_b = this.getTransactionResult()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return IncrementalExchangeResult;
}());
exports.default = IncrementalExchangeResult;
//# sourceMappingURL=IncrementalExchangeResult.js.map