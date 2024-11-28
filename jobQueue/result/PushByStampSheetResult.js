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
var Gs2JobQueue = tslib_1.__importStar(require("../model"));
var PushByStampSheetResult = /** @class */ (function () {
    function PushByStampSheetResult() {
        this.items = null;
        this.autoRun = null;
    }
    PushByStampSheetResult.prototype.getItems = function () {
        return this.items;
    };
    PushByStampSheetResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    PushByStampSheetResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    PushByStampSheetResult.prototype.getAutoRun = function () {
        return this.autoRun;
    };
    PushByStampSheetResult.prototype.setAutoRun = function (autoRun) {
        this.autoRun = autoRun;
        return this;
    };
    PushByStampSheetResult.prototype.withAutoRun = function (autoRun) {
        this.autoRun = autoRun;
        return this;
    };
    PushByStampSheetResult.fromDict = function (data) {
        return new PushByStampSheetResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2JobQueue.Job.fromDict(item);
            }) : null)
            .withAutoRun(data["autoRun"]);
    };
    PushByStampSheetResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "autoRun": this.getAutoRun(),
        };
    };
    return PushByStampSheetResult;
}());
exports.default = PushByStampSheetResult;
//# sourceMappingURL=PushByStampSheetResult.js.map