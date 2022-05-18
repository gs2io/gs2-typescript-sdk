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
var Gs2Lottery = tslib_1.__importStar(require("../model"));
var DrawByStampSheetResult = /** @class */ (function () {
    function DrawByStampSheetResult() {
        this.items = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
    }
    DrawByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    DrawByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DrawByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DrawByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByStampSheetResult.fromDict = function (data) {
        return new DrawByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.DrawnPrize.fromDict(item);
            }) : [])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    };
    DrawByStampSheetResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    };
    return DrawByStampSheetResult;
}());
exports.default = DrawByStampSheetResult;
//# sourceMappingURL=DrawByStampSheetResult.js.map