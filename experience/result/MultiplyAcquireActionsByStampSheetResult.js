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
var Gs2Experience = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var MultiplyAcquireActionsByStampSheetResult = /** @class */ (function () {
    function MultiplyAcquireActionsByStampSheetResult() {
        this.items = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    MultiplyAcquireActionsByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    MultiplyAcquireActionsByStampSheetResult.fromDict = function (data) {
        return new MultiplyAcquireActionsByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Experience.AcquireAction.fromDict(item);
            }) : null)
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    MultiplyAcquireActionsByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_a = this.getTransactionResult()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MultiplyAcquireActionsByStampSheetResult;
}());
exports.default = MultiplyAcquireActionsByStampSheetResult;
//# sourceMappingURL=MultiplyAcquireActionsByStampSheetResult.js.map