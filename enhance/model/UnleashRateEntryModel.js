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
var Gs2Enhance = tslib_1.__importStar(require("../../enhance/model"));
var UnleashRateEntryModel = /** @class */ (function () {
    function UnleashRateEntryModel() {
        this.gradeValue = null;
        this.type = null;
        this.needCount = null;
        this.recipes = null;
    }
    UnleashRateEntryModel.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    UnleashRateEntryModel.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    UnleashRateEntryModel.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    UnleashRateEntryModel.prototype.getType = function () {
        return this.type;
    };
    UnleashRateEntryModel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UnleashRateEntryModel.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UnleashRateEntryModel.prototype.getNeedCount = function () {
        return this.needCount;
    };
    UnleashRateEntryModel.prototype.setNeedCount = function (needCount) {
        this.needCount = needCount;
        return this;
    };
    UnleashRateEntryModel.prototype.withNeedCount = function (needCount) {
        this.needCount = needCount;
        return this;
    };
    UnleashRateEntryModel.prototype.getRecipes = function () {
        return this.recipes;
    };
    UnleashRateEntryModel.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        return this;
    };
    UnleashRateEntryModel.prototype.withRecipes = function (recipes) {
        this.recipes = recipes;
        return this;
    };
    UnleashRateEntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRateEntryModel()
            .withGradeValue(data["gradeValue"])
            .withType(data["type"])
            .withNeedCount(data["needCount"])
            .withRecipes(data.recipes ?
            data.recipes.map(function (item) {
                return Gs2Enhance.UnleashRecipe.fromDict(item);
            }) : null);
    };
    UnleashRateEntryModel.prototype.toDict = function () {
        return {
            "gradeValue": this.getGradeValue(),
            "type": this.getType(),
            "needCount": this.getNeedCount(),
            "recipes": this.getRecipes() ?
                this.getRecipes().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return UnleashRateEntryModel;
}());
exports.default = UnleashRateEntryModel;
//# sourceMappingURL=UnleashRateEntryModel.js.map