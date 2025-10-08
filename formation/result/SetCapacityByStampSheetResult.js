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
var SetCapacityByStampSheetResult = /** @class */ (function () {
    function SetCapacityByStampSheetResult() {
        this.item = null;
        this.old = null;
        this.moldModel = null;
    }
    SetCapacityByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    SetCapacityByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetCapacityByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetCapacityByStampSheetResult.prototype.getOld = function () {
        return this.old;
    };
    SetCapacityByStampSheetResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetCapacityByStampSheetResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetCapacityByStampSheetResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SetCapacityByStampSheetResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetCapacityByStampSheetResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetCapacityByStampSheetResult.fromDict = function (data) {
        return new SetCapacityByStampSheetResult()
            .withItem(Gs2Formation.Mold.fromDict(data["item"]))
            .withOld(Gs2Formation.Mold.fromDict(data["old"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]));
    };
    SetCapacityByStampSheetResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "moldModel": (_c = this.getMoldModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return SetCapacityByStampSheetResult;
}());
exports.default = SetCapacityByStampSheetResult;
//# sourceMappingURL=SetCapacityByStampSheetResult.js.map