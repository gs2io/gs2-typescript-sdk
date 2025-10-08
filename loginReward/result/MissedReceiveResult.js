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
var Gs2LoginReward = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var MissedReceiveResult = /** @class */ (function () {
    function MissedReceiveResult() {
        this.item = null;
        this.bonusModel = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    MissedReceiveResult.prototype.getItem = function () {
        return this.item;
    };
    MissedReceiveResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    MissedReceiveResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    MissedReceiveResult.prototype.getBonusModel = function () {
        return this.bonusModel;
    };
    MissedReceiveResult.prototype.setBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    MissedReceiveResult.prototype.withBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    MissedReceiveResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    MissedReceiveResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MissedReceiveResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MissedReceiveResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    MissedReceiveResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MissedReceiveResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MissedReceiveResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    MissedReceiveResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MissedReceiveResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MissedReceiveResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    MissedReceiveResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MissedReceiveResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MissedReceiveResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    MissedReceiveResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    MissedReceiveResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    MissedReceiveResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    MissedReceiveResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    MissedReceiveResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    MissedReceiveResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    MissedReceiveResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    MissedReceiveResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    MissedReceiveResult.fromDict = function (data) {
        return new MissedReceiveResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    MissedReceiveResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "bonusModel": (_b = this.getBonusModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_c = this.getTransactionResult()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return MissedReceiveResult;
}());
exports.default = MissedReceiveResult;
//# sourceMappingURL=MissedReceiveResult.js.map