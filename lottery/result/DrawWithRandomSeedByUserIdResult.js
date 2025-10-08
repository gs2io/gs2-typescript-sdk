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
var Gs2Lottery = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var DrawWithRandomSeedByUserIdResult = /** @class */ (function () {
    function DrawWithRandomSeedByUserIdResult() {
        this.items = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    DrawWithRandomSeedByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    DrawWithRandomSeedByUserIdResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DrawWithRandomSeedByUserIdResult.fromDict = function (data) {
        return new DrawWithRandomSeedByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.DrawnPrize.fromDict(item);
            }) : null)
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    DrawWithRandomSeedByUserIdResult.prototype.toDict = function () {
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
    return DrawWithRandomSeedByUserIdResult;
}());
exports.default = DrawWithRandomSeedByUserIdResult;
//# sourceMappingURL=DrawWithRandomSeedByUserIdResult.js.map