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
var UnleashIndividualMaterialSetting = /** @class */ (function () {
    function UnleashIndividualMaterialSetting() {
        this.matchType = null;
        this.gradeCondition = null;
        this.gradeValue = null;
        this.count = null;
    }
    UnleashIndividualMaterialSetting.prototype.getMatchType = function () {
        return this.matchType;
    };
    UnleashIndividualMaterialSetting.prototype.setMatchType = function (matchType) {
        this.matchType = matchType;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.withMatchType = function (matchType) {
        this.matchType = matchType;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.getGradeCondition = function () {
        return this.gradeCondition;
    };
    UnleashIndividualMaterialSetting.prototype.setGradeCondition = function (gradeCondition) {
        this.gradeCondition = gradeCondition;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.withGradeCondition = function (gradeCondition) {
        this.gradeCondition = gradeCondition;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    UnleashIndividualMaterialSetting.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.getCount = function () {
        return this.count;
    };
    UnleashIndividualMaterialSetting.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    UnleashIndividualMaterialSetting.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    UnleashIndividualMaterialSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashIndividualMaterialSetting()
            .withMatchType(data["matchType"])
            .withGradeCondition(data["gradeCondition"])
            .withGradeValue(data["gradeValue"])
            .withCount(data["count"]);
    };
    UnleashIndividualMaterialSetting.prototype.toDict = function () {
        return {
            "matchType": this.getMatchType(),
            "gradeCondition": this.getGradeCondition(),
            "gradeValue": this.getGradeValue(),
            "count": this.getCount(),
        };
    };
    return UnleashIndividualMaterialSetting;
}());
exports.default = UnleashIndividualMaterialSetting;
//# sourceMappingURL=UnleashIndividualMaterialSetting.js.map