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
var IncrementalExchangeByStampSheetResult = /** @class */ (function () {
    function IncrementalExchangeByStampSheetResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    IncrementalExchangeByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    IncrementalExchangeByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    IncrementalExchangeByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    IncrementalExchangeByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    IncrementalExchangeByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    IncrementalExchangeByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    IncrementalExchangeByStampSheetResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    IncrementalExchangeByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    IncrementalExchangeByStampSheetResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    IncrementalExchangeByStampSheetResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    IncrementalExchangeByStampSheetResult.fromDict = function (data) {
        return new IncrementalExchangeByStampSheetResult()
            .withItem(Gs2Exchange.IncrementalRateModel.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    IncrementalExchangeByStampSheetResult.prototype.toDict = function () {
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
    return IncrementalExchangeByStampSheetResult;
}());
exports.default = IncrementalExchangeByStampSheetResult;
//# sourceMappingURL=IncrementalExchangeByStampSheetResult.js.map