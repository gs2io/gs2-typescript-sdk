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
var Gs2Enhance = (0, tslib_1.__importStar)(require("../model"));
var GetProgressByUserIdResult = /** @class */ (function () {
    function GetProgressByUserIdResult() {
        this.item = null;
        this.rateModel = null;
    }
    GetProgressByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetProgressByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressByUserIdResult.prototype.getRateModel = function () {
        return this.rateModel;
    };
    GetProgressByUserIdResult.prototype.setRateModel = function (rateModel) {
        this.rateModel = rateModel;
        return this;
    };
    GetProgressByUserIdResult.prototype.withRateModel = function (rateModel) {
        this.rateModel = rateModel;
        return this;
    };
    GetProgressByUserIdResult.fromDict = function (data) {
        return new GetProgressByUserIdResult()
            .withItem(Gs2Enhance.Progress.fromDict(data["item"]))
            .withRateModel(Gs2Enhance.RateModel.fromDict(data["rateModel"]));
    };
    GetProgressByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rateModel": (_b = this.getRateModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetProgressByUserIdResult;
}());
exports.default = GetProgressByUserIdResult;
//# sourceMappingURL=GetProgressByUserIdResult.js.map