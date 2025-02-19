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
var Gs2Inbox = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var BatchReadMessagesResult = /** @class */ (function () {
    function BatchReadMessagesResult() {
        this.items = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    BatchReadMessagesResult.prototype.getItems = function () {
        return this.items;
    };
    BatchReadMessagesResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    BatchReadMessagesResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    BatchReadMessagesResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    BatchReadMessagesResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    BatchReadMessagesResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    BatchReadMessagesResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    BatchReadMessagesResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    BatchReadMessagesResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    BatchReadMessagesResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    BatchReadMessagesResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    BatchReadMessagesResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    BatchReadMessagesResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    BatchReadMessagesResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    BatchReadMessagesResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    BatchReadMessagesResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    BatchReadMessagesResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    BatchReadMessagesResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    BatchReadMessagesResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    BatchReadMessagesResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    BatchReadMessagesResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    BatchReadMessagesResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    BatchReadMessagesResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    BatchReadMessagesResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    BatchReadMessagesResult.fromDict = function (data) {
        return new BatchReadMessagesResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inbox.Message.fromDict(item);
            }) : null)
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    BatchReadMessagesResult.prototype.toDict = function () {
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
    return BatchReadMessagesResult;
}());
exports.default = BatchReadMessagesResult;
//# sourceMappingURL=BatchReadMessagesResult.js.map