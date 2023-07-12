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
var ReceiveResult = /** @class */ (function () {
    function ReceiveResult() {
        this.item = null;
        this.bonusModel = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
    }
    ReceiveResult.prototype.getItem = function () {
        return this.item;
    };
    ReceiveResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveResult.prototype.getBonusModel = function () {
        return this.bonusModel;
    };
    ReceiveResult.prototype.setBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    ReceiveResult.prototype.withBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    ReceiveResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReceiveResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReceiveResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReceiveResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReceiveResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveResult.fromDict = function (data) {
        return new ReceiveResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    };
    ReceiveResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "bonusModel": (_b = this.getBonusModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    };
    return ReceiveResult;
}());
exports.default = ReceiveResult;
//# sourceMappingURL=ReceiveResult.js.map