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
var DecreaseMaxValueByStampTaskResult = /** @class */ (function () {
    function DecreaseMaxValueByStampTaskResult() {
        this.item = null;
        this.staminaModel = null;
        this.newContextStack = null;
    }
    DecreaseMaxValueByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    DecreaseMaxValueByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.prototype.getStaminaModel = function () {
        return this.staminaModel;
    };
    DecreaseMaxValueByStampTaskResult.prototype.setStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.prototype.withStaminaModel = function (staminaModel) {
        this.staminaModel = staminaModel;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    DecreaseMaxValueByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DecreaseMaxValueByStampTaskResult.fromDict = function (data) {
        return new DecreaseMaxValueByStampTaskResult()
            .withItem(Gs2Stamina.Stamina.fromDict(data["item"]))
            .withStaminaModel(Gs2Stamina.StaminaModel.fromDict(data["staminaModel"]))
            .withNewContextStack(data["newContextStack"]);
    };
    DecreaseMaxValueByStampTaskResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "staminaModel": (_b = this.getStaminaModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return DecreaseMaxValueByStampTaskResult;
}());
exports.default = DecreaseMaxValueByStampTaskResult;
//# sourceMappingURL=DecreaseMaxValueByStampTaskResult.js.map