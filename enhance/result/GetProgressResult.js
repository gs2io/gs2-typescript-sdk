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
var GetProgressResult = /** @class */ (function () {
    function GetProgressResult() {
        this.item = null;
        this.rateModel = null;
    }
    GetProgressResult.prototype.getItem = function () {
        return this.item;
    };
    GetProgressResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressResult.prototype.getRateModel = function () {
        return this.rateModel;
    };
    GetProgressResult.prototype.setRateModel = function (rateModel) {
        this.rateModel = rateModel;
        return this;
    };
    GetProgressResult.prototype.withRateModel = function (rateModel) {
        this.rateModel = rateModel;
        return this;
    };
    GetProgressResult.fromDict = function (data) {
        return new GetProgressResult()
            .withItem(Gs2Enhance.Progress.fromDict(data["item"]))
            .withRateModel(Gs2Enhance.RateModel.fromDict(data["rateModel"]));
    };
    GetProgressResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rateModel": (_b = this.getRateModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetProgressResult;
}());
exports.default = GetProgressResult;
//# sourceMappingURL=GetProgressResult.js.map