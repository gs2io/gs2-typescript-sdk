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
var Gs2Stamina = tslib_1.__importStar(require("../model"));
var SetMaxValueByStatusResult = /** @class */ (function () {
    function SetMaxValueByStatusResult() {
        this.item = null;
        this.old = null;
        this.staminaModel = null;
    }
    SetMaxValueByStatusResult.prototype.getItem = function () {
        return this.item;
    };
    SetMaxValueByStatusResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetMaxValueByStatusResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetMaxValueByStatusResult.prototype.getOld = function () {
        return this.old;
    };
    SetMaxValueByStatusResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetMaxValueByStatusResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetMaxValueByStatusResult.prototype.getStaminaModel = function () {
        return this.staminaModel;
    };
    SetMaxValueByStatusResult.prototype.setStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    SetMaxValueByStatusResult.prototype.withStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    SetMaxValueByStatusResult.fromDict = function (data) {
        return new SetMaxValueByStatusResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withOld(Gs2Stamina.Stamina.fromDict(data["old"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]));
    };
    SetMaxValueByStatusResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "staminaModel": (_c = this.getStaminaModel()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return SetMaxValueByStatusResult;
}());
exports.default = SetMaxValueByStatusResult;
//# sourceMappingURL=SetMaxValueByStatusResult.js.map