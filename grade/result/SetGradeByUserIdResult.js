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
var Gs2Grade = tslib_1.__importStar(require("../model"));
var SetGradeByUserIdResult = /** @class */ (function () {
    function SetGradeByUserIdResult() {
        this.item = null;
        this.old = null;
    }
    SetGradeByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    SetGradeByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SetGradeByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SetGradeByUserIdResult.prototype.getOld = function () {
        return this.old;
    };
    SetGradeByUserIdResult.prototype.setOld = function (old) {
        this.old = old;
        return this;
    };
    SetGradeByUserIdResult.prototype.withOld = function (old) {
        this.old = old;
        return this;
    };
    SetGradeByUserIdResult.fromDict = function (data) {
        return new SetGradeByUserIdResult()
            .withItem(Gs2Grade.Status.fromDict(data["item"]))
            .withOld(Gs2Grade.Status.fromDict(data["old"]));
    };
    SetGradeByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SetGradeByUserIdResult;
}());
exports.default = SetGradeByUserIdResult;
//# sourceMappingURL=SetGradeByUserIdResult.js.map