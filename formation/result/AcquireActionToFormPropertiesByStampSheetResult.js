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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var AcquireActionToFormPropertiesByStampSheetResult = /** @class */ (function () {
    function AcquireActionToFormPropertiesByStampSheetResult() {
        this.item = null;
        this.mold = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getMold = function () {
        return this.mold;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setMold = function (mold) {
        this.mold = mold;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withMold = function (mold) {
        this.mold = mold;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.fromDict = function (data) {
        return new AcquireActionToFormPropertiesByStampSheetResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "mold": (_b = this.getMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_c = this.getTransactionResult()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return AcquireActionToFormPropertiesByStampSheetResult;
}());
exports.default = AcquireActionToFormPropertiesByStampSheetResult;
//# sourceMappingURL=AcquireActionToFormPropertiesByStampSheetResult.js.map