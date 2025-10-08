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
var Gs2Experience = tslib_1.__importStar(require("../model"));
var SetRankCapByUserIdResult = /** @class */ (function () {
    function SetRankCapByUserIdResult() {
        this.item = null;
        this.old = null;
    }
    SetRankCapByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    SetRankCapByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetRankCapByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetRankCapByUserIdResult.prototype.getOld = function () {
        return this.old;
    };
    SetRankCapByUserIdResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetRankCapByUserIdResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetRankCapByUserIdResult.fromDict = function (data) {
        return new SetRankCapByUserIdResult()
            .withItem(Gs2Experience.Status.fromDict(data["item"]))
            .withOld(Gs2Experience.Status.fromDict(data["old"]));
    };
    SetRankCapByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SetRankCapByUserIdResult;
}());
exports.default = SetRankCapByUserIdResult;
//# sourceMappingURL=SetRankCapByUserIdResult.js.map