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
var Gs2Core = tslib_1.__importStar(require("../../core"));
var BatchCompleteResult = /** @class */ (function () {
    function BatchCompleteResult() {
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    BatchCompleteResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    BatchCompleteResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    BatchCompleteResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    BatchCompleteResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    BatchCompleteResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    BatchCompleteResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    BatchCompleteResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    BatchCompleteResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    BatchCompleteResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    BatchCompleteResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    BatchCompleteResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    BatchCompleteResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    BatchCompleteResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    BatchCompleteResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    BatchCompleteResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    BatchCompleteResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    BatchCompleteResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    BatchCompleteResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    BatchCompleteResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    BatchCompleteResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    BatchCompleteResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    BatchCompleteResult.fromDict = function (data) {
        return new BatchCompleteResult()
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    BatchCompleteResult.prototype.toDict = function () {
        var _a;
        return {
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_a = this.getTransactionResult()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return BatchCompleteResult;
}());
exports.default = BatchCompleteResult;
//# sourceMappingURL=BatchCompleteResult.js.map