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
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var Prize = /** @class */ (function () {
    function Prize() {
        this.prizeId = null;
        this.type = null;
        this.acquireActions = null;
        this.drawnLimit = null;
        this.limitFailOverPrizeId = null;
        this.prizeTableName = null;
        this.weight = null;
    }
    Prize.prototype.getPrizeId = function () {
        return this.prizeId;
    };
    Prize.prototype.setPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    Prize.prototype.withPrizeId = function (prizeId) {
        this.prizeId = prizeId;
        return this;
    };
    Prize.prototype.getType = function () {
        return this.type;
    };
    Prize.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Prize.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    Prize.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    Prize.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    Prize.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    Prize.prototype.getDrawnLimit = function () {
        return this.drawnLimit;
    };
    Prize.prototype.setDrawnLimit = function (drawnLimit) {
        this.drawnLimit = drawnLimit;
        return this;
    };
    Prize.prototype.withDrawnLimit = function (drawnLimit) {
        this.drawnLimit = drawnLimit;
        return this;
    };
    Prize.prototype.getLimitFailOverPrizeId = function () {
        return this.limitFailOverPrizeId;
    };
    Prize.prototype.setLimitFailOverPrizeId = function (limitFailOverPrizeId) {
        this.limitFailOverPrizeId = limitFailOverPrizeId;
        return this;
    };
    Prize.prototype.withLimitFailOverPrizeId = function (limitFailOverPrizeId) {
        this.limitFailOverPrizeId = limitFailOverPrizeId;
        return this;
    };
    Prize.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    Prize.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    Prize.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    Prize.prototype.getWeight = function () {
        return this.weight;
    };
    Prize.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    Prize.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    Prize.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Prize()
            .withPrizeId(data["prizeId"])
            .withType(data["type"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withDrawnLimit(data["drawnLimit"])
            .withLimitFailOverPrizeId(data["limitFailOverPrizeId"])
            .withPrizeTableName(data["prizeTableName"])
            .withWeight(data["weight"]);
    };
    Prize.prototype.toDict = function () {
        return {
            "prizeId": this.getPrizeId(),
            "type": this.getType(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "drawnLimit": this.getDrawnLimit(),
            "limitFailOverPrizeId": this.getLimitFailOverPrizeId(),
            "prizeTableName": this.getPrizeTableName(),
            "weight": this.getWeight(),
        };
    };
    return Prize;
}());
exports.default = Prize;
//# sourceMappingURL=Prize.js.map