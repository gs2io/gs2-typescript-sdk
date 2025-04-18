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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var SetByStampSheetResult = /** @class */ (function () {
    function SetByStampSheetResult() {
        this.item = null;
        this.old = null;
        this.changedCompletes = null;
    }
    SetByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    SetByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetByStampSheetResult.prototype.getOld = function () {
        return this.old;
    };
    SetByStampSheetResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetByStampSheetResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetByStampSheetResult.prototype.getChangedCompletes = function () {
        return this.changedCompletes;
    };
    SetByStampSheetResult.prototype.setChangedCompletes = function (changedCompletes) {
        this.changedCompletes = changedCompletes;
        return this;
    };
    SetByStampSheetResult.prototype.withChangedCompletes = function (changedCompletes) {
        this.changedCompletes = changedCompletes;
        return this;
    };
    SetByStampSheetResult.fromDict = function (data) {
        return new SetByStampSheetResult()
            .withItem(Gs2Mission.Counter.fromDict(data["item"]))
            .withOld(Gs2Mission.Counter.fromDict(data["old"]))
            .withChangedCompletes(data.changedCompletes ?
            data.changedCompletes.map(function (item) {
                return Gs2Mission.Complete.fromDict(item);
            }) : null);
    };
    SetByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changedCompletes": this.getChangedCompletes() ?
                this.getChangedCompletes().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SetByStampSheetResult;
}());
exports.default = SetByStampSheetResult;
//# sourceMappingURL=SetByStampSheetResult.js.map