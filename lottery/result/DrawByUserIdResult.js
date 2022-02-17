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
var DrawByUserIdResult = /** @class */ (function () {
    function DrawByUserIdResult() {
        this.items = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.boxItems = null;
    }
    DrawByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DrawByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DrawByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    DrawByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    DrawByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    DrawByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    DrawByUserIdResult.prototype.getBoxItems = function () {
        return this.boxItems;
    };
    DrawByUserIdResult.prototype.setBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByUserIdResult.prototype.withBoxItems = function (boxItems) {
        this.boxItems = boxItems;
        return this;
    };
    DrawByUserIdResult.fromDict = function (data) {
        return new DrawByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.DrawnPrize.fromDict(item);
            }) : [])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withBoxItems(Gs2Lottery.BoxItems.fromDict(data["boxItems"]));
    };
    DrawByUserIdResult.prototype.toDict = function () {
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
    return DrawByUserIdResult;
}());
export default DrawByUserIdResult;
//# sourceMappingURL=DrawByUserIdResult.js.map