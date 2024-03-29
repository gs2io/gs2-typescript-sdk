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
var GetStaminaResult = /** @class */ (function () {
    function GetStaminaResult() {
        this.item = null;
        this.staminaModel = null;
    }
    GetStaminaResult.prototype.getItem = function () {
        return this.item;
    };
    GetStaminaResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetStaminaResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetStaminaResult.prototype.getStaminaModel = function () {
        return this.staminaModel;
    };
    GetStaminaResult.prototype.setStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    GetStaminaResult.prototype.withStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    GetStaminaResult.fromDict = function (data) {
        return new GetStaminaResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]));
    };
    GetStaminaResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "staminaModel": (_b = this.getStaminaModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetStaminaResult;
}());
exports.default = GetStaminaResult;
//# sourceMappingURL=GetStaminaResult.js.map