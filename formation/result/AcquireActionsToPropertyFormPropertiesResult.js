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
var AcquireActionsToPropertyFormPropertiesResult = /** @class */ (function () {
    function AcquireActionsToPropertyFormPropertiesResult() {
        this.item = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
    }
    AcquireActionsToPropertyFormPropertiesResult.prototype.getItem = function () {
        return this.item;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    AcquireActionsToPropertyFormPropertiesResult.fromDict = function (data) {
        return new AcquireActionsToPropertyFormPropertiesResult()
            .withItem(Gs2Formation.PropertyForm.fromDict(data["item"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    };
    AcquireActionsToPropertyFormPropertiesResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    };
    return AcquireActionsToPropertyFormPropertiesResult;
}());
exports.default = AcquireActionsToPropertyFormPropertiesResult;
//# sourceMappingURL=AcquireActionsToPropertyFormPropertiesResult.js.map