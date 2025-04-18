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
var Gs2Enhance = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var DirectEnhanceByStampSheetResult = /** @class */ (function () {
    function DirectEnhanceByStampSheetResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
        this.acquireExperience = null;
        this.bonusRate = null;
    }
    DirectEnhanceByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    DirectEnhanceByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DirectEnhanceByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DirectEnhanceByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DirectEnhanceByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    DirectEnhanceByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    DirectEnhanceByStampSheetResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    DirectEnhanceByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    DirectEnhanceByStampSheetResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getAcquireExperience = function () {
        return this.acquireExperience;
    };
    DirectEnhanceByStampSheetResult.prototype.setAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.getBonusRate = function () {
        return this.bonusRate;
    };
    DirectEnhanceByStampSheetResult.prototype.setBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceByStampSheetResult.prototype.withBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceByStampSheetResult.fromDict = function (data) {
        return new DirectEnhanceByStampSheetResult()
            .withItem(Gs2Enhance.RateModel.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]))
            .withAcquireExperience(data["acquireExperience"])
            .withBonusRate(data["bonusRate"]);
    };
    DirectEnhanceByStampSheetResult.prototype.toDict = function () {
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
            "acquireExperience": this.getAcquireExperience(),
            "bonusRate": this.getBonusRate(),
        };
    };
    return DirectEnhanceByStampSheetResult;
}());
exports.default = DirectEnhanceByStampSheetResult;
//# sourceMappingURL=DirectEnhanceByStampSheetResult.js.map