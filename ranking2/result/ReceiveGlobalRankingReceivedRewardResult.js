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
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var ReceiveGlobalRankingReceivedRewardResult = /** @class */ (function () {
    function ReceiveGlobalRankingReceivedRewardResult() {
        this.item = null;
        this.acquireActions = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    ReceiveGlobalRankingReceivedRewardResult.prototype.getItem = function () {
        return this.item;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardResult.fromDict = function (data) {
        return new ReceiveGlobalRankingReceivedRewardResult()
            .withItem(Gs2Ranking2.GlobalRankingModel.fromDict(data["item"]))
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Ranking2.AcquireAction.fromDict(item);
            }) : null)
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    ReceiveGlobalRankingReceivedRewardResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_b = this.getTransactionResult()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ReceiveGlobalRankingReceivedRewardResult;
}());
exports.default = ReceiveGlobalRankingReceivedRewardResult;
//# sourceMappingURL=ReceiveGlobalRankingReceivedRewardResult.js.map