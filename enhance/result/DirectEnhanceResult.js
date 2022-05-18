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
var DirectEnhanceResult = /** @class */ (function () {
    function DirectEnhanceResult() {
        this.item = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.acquireExperience = null;
        this.bonusRate = null;
    }
    DirectEnhanceResult.prototype.getItem = function () {
        return this.item;
    };
    DirectEnhanceResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DirectEnhanceResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DirectEnhanceResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DirectEnhanceResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DirectEnhanceResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DirectEnhanceResult.prototype.getAcquireExperience = function () {
        return this.acquireExperience;
    };
    DirectEnhanceResult.prototype.setAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceResult.prototype.withAcquireExperience = function (acquireExperience) {
        this.acquireExperience = acquireExperience;
        return this;
    };
    DirectEnhanceResult.prototype.getBonusRate = function () {
        return this.bonusRate;
    };
    DirectEnhanceResult.prototype.setBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceResult.prototype.withBonusRate = function (bonusRate) {
        this.bonusRate = bonusRate;
        return this;
    };
    DirectEnhanceResult.fromDict = function (data) {
        return new DirectEnhanceResult()
            .withItem(Gs2Enhance.RateModel.fromDict(data["item"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAcquireExperience(data["acquireExperience"])
            .withBonusRate(data["bonusRate"]);
    };
    DirectEnhanceResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "acquireExperience": this.getAcquireExperience(),
            "bonusRate": this.getBonusRate(),
        };
    };
    return DirectEnhanceResult;
}());
exports.default = DirectEnhanceResult;
//# sourceMappingURL=DirectEnhanceResult.js.map