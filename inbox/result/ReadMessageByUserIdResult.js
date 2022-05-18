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
var Gs2Inbox = tslib_1.__importStar(require("../model"));
var ReadMessageByUserIdResult = /** @class */ (function () {
    function ReadMessageByUserIdResult() {
        this.item = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
    }
    ReadMessageByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    ReadMessageByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReadMessageByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReadMessageByUserIdResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReadMessageByUserIdResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReadMessageByUserIdResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReadMessageByUserIdResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReadMessageByUserIdResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReadMessageByUserIdResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReadMessageByUserIdResult.fromDict = function (data) {
        return new ReadMessageByUserIdResult()
            .withItem(Gs2Inbox.Message.fromDict(data["item"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    };
    ReadMessageByUserIdResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    };
    return ReadMessageByUserIdResult;
}());
exports.default = ReadMessageByUserIdResult;
//# sourceMappingURL=ReadMessageByUserIdResult.js.map