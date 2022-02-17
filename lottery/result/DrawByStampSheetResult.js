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
import * as Gs2Lottery from '../model';
var DrawByStampSheetResult = /** @class */ (function () {
    function DrawByStampSheetResult() {
        this.items = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.boxItems = null;
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
    DrawByStampSheetResult.prototype.getBoxItems = function () {
        return this.boxItems;
    };
    DrawByStampSheetResult.prototype.setBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByStampSheetResult.prototype.withBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByStampSheetResult.fromDict = function (data) {
        return new DrawByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.DrawnPrize.fromDict(item);
            }) : [])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withBoxItems(Gs2Lottery.BoxItems.fromDict(data["boxItems"]));
    };
    DrawByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "boxItems": (_a = this.getBoxItems()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return DrawByStampSheetResult;
}());
export default DrawByStampSheetResult;
//# sourceMappingURL=DrawByStampSheetResult.js.map