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
var LotteryNamespaceDrawDistribution_1 = tslib_1.__importDefault(require("./LotteryNamespaceDrawDistribution"));
var LotteryNamespaceDrawAmountDistribution_1 = tslib_1.__importDefault(require("./LotteryNamespaceDrawAmountDistribution"));
var LotteryNamespaceDrawByUserDistribution_1 = tslib_1.__importDefault(require("./LotteryNamespaceDrawByUserDistribution"));
var LotteryNamespaceDrawAmountByUserDistribution_1 = tslib_1.__importDefault(require("./LotteryNamespaceDrawAmountByUserDistribution"));
var LotteryNamespaceDistributions = /** @class */ (function () {
    function LotteryNamespaceDistributions() {
        this.draw = null;
        this.drawAmount = null;
        this.drawByUser = null;
        this.drawAmountByUser = null;
    }
    LotteryNamespaceDistributions.prototype.getDraw = function () {
        return this.draw;
    };
    LotteryNamespaceDistributions.prototype.setDraw = function (draw) {
        this.draw = draw;
        return this;
    };
    LotteryNamespaceDistributions.prototype.withDraw = function (draw) {
        this.draw = draw;
        return this;
    };
    LotteryNamespaceDistributions.prototype.getDrawAmount = function () {
        return this.drawAmount;
    };
    LotteryNamespaceDistributions.prototype.setDrawAmount = function (drawAmount) {
        this.drawAmount = drawAmount;
        return this;
    };
    LotteryNamespaceDistributions.prototype.withDrawAmount = function (drawAmount) {
        this.drawAmount = drawAmount;
        return this;
    };
    LotteryNamespaceDistributions.prototype.getDrawByUser = function () {
        return this.drawByUser;
    };
    LotteryNamespaceDistributions.prototype.setDrawByUser = function (drawByUser) {
        this.drawByUser = drawByUser;
        return this;
    };
    LotteryNamespaceDistributions.prototype.withDrawByUser = function (drawByUser) {
        this.drawByUser = drawByUser;
        return this;
    };
    LotteryNamespaceDistributions.prototype.getDrawAmountByUser = function () {
        return this.drawAmountByUser;
    };
    LotteryNamespaceDistributions.prototype.setDrawAmountByUser = function (drawAmountByUser) {
        this.drawAmountByUser = drawAmountByUser;
        return this;
    };
    LotteryNamespaceDistributions.prototype.withDrawAmountByUser = function (drawAmountByUser) {
        this.drawAmountByUser = drawAmountByUser;
        return this;
    };
    LotteryNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryNamespaceDistributions()
            .withDraw(LotteryNamespaceDrawDistribution_1.default.fromDict(data["draw"]))
            .withDrawAmount(LotteryNamespaceDrawAmountDistribution_1.default.fromDict(data["drawAmount"]))
            .withDrawByUser(LotteryNamespaceDrawByUserDistribution_1.default.fromDict(data["drawByUser"]))
            .withDrawAmountByUser(LotteryNamespaceDrawAmountByUserDistribution_1.default.fromDict(data["drawAmountByUser"]));
    };
    LotteryNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "draw": (_a = this.getDraw()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "drawAmount": (_b = this.getDrawAmount()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "drawByUser": (_c = this.getDrawByUser()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "drawAmountByUser": (_d = this.getDrawAmountByUser()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return LotteryNamespaceDistributions;
}());
exports.default = LotteryNamespaceDistributions;
//# sourceMappingURL=LotteryNamespaceDistributions.js.map