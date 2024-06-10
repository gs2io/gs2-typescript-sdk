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
var ReceiveByStampSheetResult = /** @class */ (function () {
    function ReceiveByStampSheetResult() {
        this.items = null;
        this.status = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
    }
    ReceiveByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    ReceiveByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    ReceiveByStampSheetResult.prototype.getStatus = function () {
        return this.status;
    };
    ReceiveByStampSheetResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    ReceiveByStampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReceiveByStampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReceiveByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReceiveByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveByStampSheetResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReceiveByStampSheetResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveByStampSheetResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveByStampSheetResult.fromDict = function (data) {
        return new ReceiveByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Idle.AcquireAction.fromDict(item);
            }) : [])
            .withStatus(Gs2Idle.Status.fromDict(data["status"]))
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    };
    ReceiveByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "status": (_a = this.getStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    };
    return ReceiveByStampSheetResult;
}());
exports.default = ReceiveByStampSheetResult;
//# sourceMappingURL=ReceiveByStampSheetResult.js.map