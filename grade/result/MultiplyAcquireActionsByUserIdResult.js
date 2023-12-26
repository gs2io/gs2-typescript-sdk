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
var Gs2Grade = tslib_1.__importStar(require("../model"));
var MultiplyAcquireActionsByUserIdResult = /** @class */ (function () {
    function MultiplyAcquireActionsByUserIdResult() {
        this.items = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
    }
    MultiplyAcquireActionsByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    MultiplyAcquireActionsByUserIdResult.fromDict = function (data) {
        return new MultiplyAcquireActionsByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Grade.AcquireAction.fromDict(item);
            }) : [])
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    };
    MultiplyAcquireActionsByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    };
    return MultiplyAcquireActionsByUserIdResult;
}());
exports.default = MultiplyAcquireActionsByUserIdResult;
//# sourceMappingURL=MultiplyAcquireActionsByUserIdResult.js.map