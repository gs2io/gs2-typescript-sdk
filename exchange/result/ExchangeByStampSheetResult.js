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
var Gs2Exchange = (0, tslib_1.__importStar)(require("../model"));
var ExchangeByStampSheetResult = /** @class */ (function () {
    function ExchangeByStampSheetResult() {
        this.item = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
    }
    ExchangeByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    ExchangeByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ExchangeByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ExchangeByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ExchangeByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ExchangeByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ExchangeByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ExchangeByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ExchangeByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ExchangeByStampSheetResult.fromDict = function (data) {
        return new ExchangeByStampSheetResult()
            .withItem(Gs2Exchange.RateModel.fromDict(data["item"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    };
    ExchangeByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    };
    return ExchangeByStampSheetResult;
}());
exports.default = ExchangeByStampSheetResult;
//# sourceMappingURL=ExchangeByStampSheetResult.js.map