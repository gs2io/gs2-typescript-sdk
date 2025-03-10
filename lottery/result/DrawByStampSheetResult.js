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
var DrawByStampSheetResult = /** @class */ (function () {
    function DrawByStampSheetResult() {
        this.items = null;
        this.boxItems = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    DrawByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    DrawByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByStampSheetResult.prototype.getBoxItems = function () {
        return this.boxItems;
    };
    DrawByStampSheetResult.prototype.setBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByStampSheetResult.prototype.withBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DrawByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DrawByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DrawByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DrawByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DrawByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    DrawByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    DrawByStampSheetResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DrawByStampSheetResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DrawByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    DrawByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DrawByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DrawByStampSheetResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    DrawByStampSheetResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DrawByStampSheetResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DrawByStampSheetResult.fromDict = function (data) {
        return new DrawByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.DrawnPrize.fromDict(item);
            }) : null)
            .withBoxItems(Gs2Lottery.BoxItems.fromDict(data["boxItems"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    DrawByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "boxItems": (_a = this.getBoxItems()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_b = this.getTransactionResult()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return DrawByStampSheetResult;
}());
exports.default = DrawByStampSheetResult;
//# sourceMappingURL=DrawByStampSheetResult.js.map