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
var Gs2Formation = (0, tslib_1.__importStar)(require("../model"));
var AcquireActionToFormPropertiesByStampSheetResult = /** @class */ (function () {
    function AcquireActionToFormPropertiesByStampSheetResult() {
        this.item = null;
        this.mold = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
    }
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getMold = function () {
        return this.mold;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setMold = function (mold) {
        this.mold = mold;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withMold = function (mold) {
        this.mold = mold;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    AcquireActionToFormPropertiesByStampSheetResult.fromDict = function (data) {
        return new AcquireActionToFormPropertiesByStampSheetResult()
            .withItem(Gs2Formation.Form.fromDict(data["item"]))
            .withMold(Gs2Formation.Mold.fromDict(data["mold"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    };
    AcquireActionToFormPropertiesByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "mold": (_b = this.getMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    };
    return AcquireActionToFormPropertiesByStampSheetResult;
}());
exports.default = AcquireActionToFormPropertiesByStampSheetResult;
//# sourceMappingURL=AcquireActionToFormPropertiesByStampSheetResult.js.map