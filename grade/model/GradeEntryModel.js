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
var GradeEntryModel = /** @class */ (function () {
    function GradeEntryModel() {
        this.metadata = null;
        this.rankCapValue = null;
        this.propertyIdRegex = null;
        this.gradeUpPropertyIdRegex = null;
    }
    GradeEntryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    GradeEntryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeEntryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GradeEntryModel.prototype.getRankCapValue = function () {
        return this.rankCapValue;
    };
    GradeEntryModel.prototype.setRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    GradeEntryModel.prototype.withRankCapValue = function (rankCapValue) {
        this.rankCapValue = rankCapValue;
        return this;
    };
    GradeEntryModel.prototype.getPropertyIdRegex = function () {
        return this.propertyIdRegex;
    };
    GradeEntryModel.prototype.setPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    GradeEntryModel.prototype.withPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    GradeEntryModel.prototype.getGradeUpPropertyIdRegex = function () {
        return this.gradeUpPropertyIdRegex;
    };
    GradeEntryModel.prototype.setGradeUpPropertyIdRegex = function (gradeUpPropertyIdRegex) {
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        return this;
    };
    GradeEntryModel.prototype.withGradeUpPropertyIdRegex = function (gradeUpPropertyIdRegex) {
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        return this;
    };
    GradeEntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GradeEntryModel()
            .withMetadata(data["metadata"])
            .withRankCapValue(data["rankCapValue"])
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withGradeUpPropertyIdRegex(data["gradeUpPropertyIdRegex"]);
    };
    GradeEntryModel.prototype.toDict = function () {
        return {
            "metadata": this.getMetadata(),
            "rankCapValue": this.getRankCapValue(),
            "propertyIdRegex": this.getPropertyIdRegex(),
            "gradeUpPropertyIdRegex": this.getGradeUpPropertyIdRegex(),
        };
    };
    return GradeEntryModel;
}());
exports.default = GradeEntryModel;
//# sourceMappingURL=GradeEntryModel.js.map