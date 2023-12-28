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
var Gs2Experience = tslib_1.__importStar(require("../../experience/model"));
var ApplyRankCapByStampSheetResult = /** @class */ (function () {
    function ApplyRankCapByStampSheetResult() {
        this.item = null;
        this.experienceNamespaceName = null;
        this.experienceStatus = null;
    }
    ApplyRankCapByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    ApplyRankCapByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ApplyRankCapByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ApplyRankCapByStampSheetResult.prototype.getExperienceNamespaceName = function () {
        return this.experienceNamespaceName;
    };
    ApplyRankCapByStampSheetResult.prototype.setExperienceNamespaceName = function (experienceNamespaceName) {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    };
    ApplyRankCapByStampSheetResult.prototype.withExperienceNamespaceName = function (experienceNamespaceName) {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    };
    ApplyRankCapByStampSheetResult.prototype.getExperienceStatus = function () {
        return this.experienceStatus;
    };
    ApplyRankCapByStampSheetResult.prototype.setExperienceStatus = function (experienceStatus) {
        this.experienceStatus = experienceStatus;
        return this;
    };
    ApplyRankCapByStampSheetResult.prototype.withExperienceStatus = function (experienceStatus) {
        this.experienceStatus = experienceStatus;
        return this;
    };
    ApplyRankCapByStampSheetResult.fromDict = function (data) {
        return new ApplyRankCapByStampSheetResult()
            .withItem(Gs2Grade.Status.fromDict(data["item"]))
            .withExperienceNamespaceName(data["experienceNamespaceName"])
            .withExperienceStatus(Gs2Experience.Status.fromDict(data["experienceStatus"]));
    };
    ApplyRankCapByStampSheetResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "experienceNamespaceName": this.getExperienceNamespaceName(),
            "experienceStatus": (_b = this.getExperienceStatus()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ApplyRankCapByStampSheetResult;
}());
exports.default = ApplyRankCapByStampSheetResult;
//# sourceMappingURL=ApplyRankCapByStampSheetResult.js.map