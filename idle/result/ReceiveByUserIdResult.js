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
var Gs2Idle = tslib_1.__importStar(require("../model"));
var Gs2Core = tslib_1.__importStar(require("../../core"));
var ReceiveByUserIdResult = /** @class */ (function () {
    function ReceiveByUserIdResult() {
        this.items = null;
        this.status = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.atomicCommit = null;
        this.transaction = null;
        this.transactionResult = null;
    }
    ReceiveByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    ReceiveByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    ReceiveByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    ReceiveByUserIdResult.prototype.getStatus = function () {
        return this.status;
    };
    ReceiveByUserIdResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    ReceiveByUserIdResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    ReceiveByUserIdResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReceiveByUserIdResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveByUserIdResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReceiveByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReceiveByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveByUserIdResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReceiveByUserIdResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveByUserIdResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveByUserIdResult.prototype.getAtomicCommit = function () {
        return this.atomicCommit;
    };
    ReceiveByUserIdResult.prototype.setAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReceiveByUserIdResult.prototype.withAtomicCommit = function (atomicCommit) {
        this.atomicCommit = atomicCommit;
        return this;
    };
    ReceiveByUserIdResult.prototype.getTransaction = function () {
        return this.transaction;
    };
    ReceiveByUserIdResult.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReceiveByUserIdResult.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    ReceiveByUserIdResult.prototype.getTransactionResult = function () {
        return this.transactionResult;
    };
    ReceiveByUserIdResult.prototype.setTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReceiveByUserIdResult.prototype.withTransactionResult = function (transactionResult) {
        this.transactionResult = transactionResult;
        return this;
    };
    ReceiveByUserIdResult.fromDict = function (data) {
        return new ReceiveByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Idle.AcquireAction.fromDict(item);
            }) : null)
            .withStatus(Gs2Idle.Status.fromDict(data["status"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAtomicCommit(data["atomicCommit"])
            .withTransaction(data["transaction"])
            .withTransactionResult(Gs2Core.TransactionResult.fromDict(data["transactionResult"]));
    };
    ReceiveByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "atomicCommit": this.getAtomicCommit(),
            "transaction": this.getTransaction(),
            "transactionResult": (_b = this.getTransactionResult()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ReceiveByUserIdResult;
}());
exports.default = ReceiveByUserIdResult;
//# sourceMappingURL=ReceiveByUserIdResult.js.map