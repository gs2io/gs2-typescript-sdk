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
var UnmarkReceivedByStampSheetResult = /** @class */ (function () {
    function UnmarkReceivedByStampSheetResult() {
        this.item = null;
        this.bonusModel = null;
    }
    UnmarkReceivedByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    UnmarkReceivedByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UnmarkReceivedByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UnmarkReceivedByStampSheetResult.prototype.getBonusModel = function () {
        return this.bonusModel;
    };
    UnmarkReceivedByStampSheetResult.prototype.setBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    UnmarkReceivedByStampSheetResult.prototype.withBonusModel = function (bonusModel) {
        this.bonusModel = bonusModel;
        return this;
    };
    UnmarkReceivedByStampSheetResult.fromDict = function (data) {
        return new UnmarkReceivedByStampSheetResult()
            .withItem(Gs2LoginReward.ReceiveStatus.fromDict(data["item"]))
            .withBonusModel(Gs2LoginReward.BonusModel.fromDict(data["bonusModel"]));
    };
    UnmarkReceivedByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "bonusModel": (_b = this.getBonusModel()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UnmarkReceivedByStampSheetResult;
}());
exports.default = UnmarkReceivedByStampSheetResult;
//# sourceMappingURL=UnmarkReceivedByStampSheetResult.js.map