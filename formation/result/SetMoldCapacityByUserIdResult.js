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
var SetMoldCapacityByUserIdResult = /** @class */ (function () {
    function SetMoldCapacityByUserIdResult() {
        this.item = null;
        this.old = null;
        this.moldModel = null;
    }
    SetMoldCapacityByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    SetMoldCapacityByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetMoldCapacityByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetMoldCapacityByUserIdResult.prototype.getOld = function () {
        return this.old;
    };
    SetMoldCapacityByUserIdResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetMoldCapacityByUserIdResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetMoldCapacityByUserIdResult.prototype.getMoldModel = function () {
        return this.moldModel;
    };
    SetMoldCapacityByUserIdResult.prototype.setMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetMoldCapacityByUserIdResult.prototype.withMoldModel = function (moldModel) {
        this.moldModel = moldModel;
        return this;
    };
    SetMoldCapacityByUserIdResult.fromDict = function (data) {
        return new SetMoldCapacityByUserIdResult()
            .withItem(Gs2Formation.Mold.fromDict(data["item"]))
            .withOld(Gs2Formation.Mold.fromDict(data["old"]))
            .withMoldModel(Gs2Formation.MoldModel.fromDict(data["moldModel"]));
    };
    SetMoldCapacityByUserIdResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "moldModel": (_c = this.getMoldModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return SetMoldCapacityByUserIdResult;
}());
exports.default = SetMoldCapacityByUserIdResult;
//# sourceMappingURL=SetMoldCapacityByUserIdResult.js.map