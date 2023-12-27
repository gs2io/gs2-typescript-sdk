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
        this.experienceNamespaceName = null;
        this.experienceStatus = null;
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
    SetGradeByUserIdResult.prototype.getExperienceNamespaceName = function () {
        return this.experienceNamespaceName;
    };
    SetGradeByUserIdResult.prototype.setExperienceNamespaceName = function (experienceNamespaceName) {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    };
    SetGradeByUserIdResult.prototype.withExperienceNamespaceName = function (experienceNamespaceName) {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    };
    SetGradeByUserIdResult.prototype.getExperienceStatus = function () {
        return this.experienceStatus;
    };
    SetGradeByUserIdResult.prototype.setExperienceStatus = function (experienceStatus) {
        this.experienceStatus = experienceStatus;
        return this;
    };
    SetGradeByUserIdResult.prototype.withExperienceStatus = function (experienceStatus) {
        this.experienceStatus = experienceStatus;
        return this;
    };
    SetGradeByUserIdResult.fromDict = function (data) {
        return new SetGradeByUserIdResult()
            .withItem(Gs2Grade.Status.fromDict(data["item"]))
            .withOld(Gs2Grade.Status.fromDict(data["old"]))
            .withExperienceNamespaceName(data["experienceNamespaceName"])
            .withExperienceStatus(Gs2Grade.Status.fromDict(data["experienceStatus"]));
    };
    SetGradeByUserIdResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "old": (_b = this.getOld()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "experienceNamespaceName": this.getExperienceNamespaceName(),
            "experienceStatus": (_c = this.getExperienceStatus()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return SetGradeByUserIdResult;
}());
exports.default = SetGradeByUserIdResult;
//# sourceMappingURL=SetGradeByUserIdResult.js.map