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
var EndResult = /** @class */ (function () {
    function EndResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.acquireExperience = null;
        this.bonusRate = null;
    }
    EndResult.prototype.getItem = function () {
        return this.item;
    };
    EndResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    EndResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    EndResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    EndResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    EndResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    EndResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    EndResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    EndResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    EndResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    EndResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    EndResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    EndResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    EndResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    EndResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    EndResult.prototype.getAcquireExperience = function () {
        return this.acquireExperience;
    };
    EndResult.prototype.setAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    EndResult.prototype.withAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    EndResult.prototype.getBonusRate = function () {
        return this.bonusRate;
    };
    EndResult.prototype.setBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    EndResult.prototype.withBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    EndResult.fromDict = function (data) {
        return new EndResult()
            .withItem(Gs2Enhance.Progress.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAcquireExperience(data["acquireExperience"])
            .withBonusRate(data["bonusRate"]);
    };
    EndResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
            "acquireExperience": this.getAcquireExperience(),
            "bonusRate": this.getBonusRate(),
        };
    };
    return EndResult;
}());
exports.default = EndResult;
//# sourceMappingURL=EndResult.js.map