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
var Gs2LoginReward = tslib_1.__importStar(require("../model"));
var MarkReceivedByUserIdResult = /** @class */ (function () {
    function MarkReceivedByUserIdResult() {
        this.item = null;
        this.bonusModel = null;
    }
    MarkReceivedByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    MarkReceivedByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    MarkReceivedByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    MarkReceivedByUserIdResult.prototype.getBonusModel = function () {
        return this.bonusModel;
    };
    MarkReceivedByUserIdResult.prototype.setBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    MarkReceivedByUserIdResult.prototype.withBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    MarkReceivedByUserIdResult.fromDict = function (data) {
        return new MarkReceivedByUserIdResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]));
    };
    MarkReceivedByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "bonusModel": (_b = this.getBonusModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MarkReceivedByUserIdResult;
}());
exports.default = MarkReceivedByUserIdResult;
//# sourceMappingURL=MarkReceivedByUserIdResult.js.map