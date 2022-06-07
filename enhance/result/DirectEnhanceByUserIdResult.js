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
var DirectEnhanceByUserIdResult = /** @class */ (function () {
    function DirectEnhanceByUserIdResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
        this.acquireExperience = null;
        this.bonusRate = null;
    }
    DirectEnhanceByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    DirectEnhanceByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DirectEnhanceByUserIdResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DirectEnhanceByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DirectEnhanceByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    DirectEnhanceByUserIdResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getAcquireExperience = function () {
        return this.acquireExperience;
    };
    DirectEnhanceByUserIdResult.prototype.setAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.getBonusRate = function () {
        return this.bonusRate;
    };
    DirectEnhanceByUserIdResult.prototype.setBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceByUserIdResult.prototype.withBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceByUserIdResult.fromDict = function (data) {
        return new DirectEnhanceByUserIdResult()
            .withItem(Gs2Enhance.RateModel.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"])
            .withAcquireExperience(data["acquireExperience"])
            .withBonusRate(data["bonusRate"]);
    };
    DirectEnhanceByUserIdResult.prototype.toDict = function () {
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
    return DirectEnhanceByUserIdResult;
}());
exports.default = DirectEnhanceByUserIdResult;
//# sourceMappingURL=DirectEnhanceByUserIdResult.js.map