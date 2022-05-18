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
var Gs2Lottery = tslib_1.__importStar(require("../model"));
var CreatePrizeTableMasterResult = /** @class */ (function () {
    function CreatePrizeTableMasterResult() {
        this.item = null;
    }
    CreatePrizeTableMasterResult.prototype.getItem = function () {
        return this.item;
    };
    CreatePrizeTableMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    CreatePrizeTableMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    CreatePrizeTableMasterResult.fromDict = function (data) {
        return new CreatePrizeTableMasterResult()
            .withItem(Gs2Lottery.PrizeTableMaster.fromDict(data["item"]));
    };
    CreatePrizeTableMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CreatePrizeTableMasterResult;
}());
exports.default = CreatePrizeTableMasterResult;
//# sourceMappingURL=CreatePrizeTableMasterResult.js.map