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
var Gs2SkillTree = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var ReleaseByUserIdResult = /** @class */ (function () {
    function ReleaseByUserIdResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    ReleaseByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    ReleaseByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReleaseByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReleaseByUserIdResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReleaseByUserIdResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReleaseByUserIdResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReleaseByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReleaseByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReleaseByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReleaseByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReleaseByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReleaseByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReleaseByUserIdResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReleaseByUserIdResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReleaseByUserIdResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReleaseByUserIdResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    ReleaseByUserIdResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReleaseByUserIdResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReleaseByUserIdResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    ReleaseByUserIdResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReleaseByUserIdResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReleaseByUserIdResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    ReleaseByUserIdResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReleaseByUserIdResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReleaseByUserIdResult.fromDict = function (data) {
        return new ReleaseByUserIdResult()
            .withItem(Gs2SkillTree.Status.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    ReleaseByUserIdResult.prototype.toDict = function () {
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
    return ReleaseByUserIdResult;
}());
exports.default = ReleaseByUserIdResult;
//# sourceMappingURL=ReleaseByUserIdResult.js.map