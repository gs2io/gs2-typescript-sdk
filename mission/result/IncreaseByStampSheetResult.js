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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var IncreaseByStampSheetResult = /** @class */ (function () {
    function IncreaseByStampSheetResult() {
        this.item = null;
        this.changedCompletes = null;
    }
    IncreaseByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    IncreaseByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    IncreaseByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    IncreaseByStampSheetResult.prototype.getChangedCompletes = function () {
        return this.changedCompletes;
    };
    IncreaseByStampSheetResult.prototype.setChangedCompletes = function (changedCompletes) {
        this.changedCompletes = changedCompletes;
        return this;
    };
    IncreaseByStampSheetResult.prototype.withChangedCompletes = function (changedCompletes) {
        this.changedCompletes = changedCompletes;
        return this;
    };
    IncreaseByStampSheetResult.fromDict = function (data) {
        return new IncreaseByStampSheetResult()
            .withItem(Gs2Mission.Counter.fromDict(data["item"]))
            .withChangedCompletes(data.changedCompletes ?
            data.changedCompletes.map(function (item) {
                return Gs2Mission.Complete.fromDict(item);
            }) : null);
    };
    IncreaseByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "changedCompletes": this.getChangedCompletes() ?
                this.getChangedCompletes().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return IncreaseByStampSheetResult;
}());
exports.default = IncreaseByStampSheetResult;
//# sourceMappingURL=IncreaseByStampSheetResult.js.map