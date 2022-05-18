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
var SetMaxValueByStampSheetResult = /** @class */ (function () {
    function SetMaxValueByStampSheetResult() {
        this.item = null;
        this.staminaModel = null;
    }
    SetMaxValueByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    SetMaxValueByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetMaxValueByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetMaxValueByStampSheetResult.prototype.getStaminaModel = function () {
        return this.staminaModel;
    };
    SetMaxValueByStampSheetResult.prototype.setStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    SetMaxValueByStampSheetResult.prototype.withStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    SetMaxValueByStampSheetResult.fromDict = function (data) {
        return new SetMaxValueByStampSheetResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]));
    };
    SetMaxValueByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "staminaModel": (_b = this.getStaminaModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SetMaxValueByStampSheetResult;
}());
exports.default = SetMaxValueByStampSheetResult;
//# sourceMappingURL=SetMaxValueByStampSheetResult.js.map