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
var UnleashRateEntryModel = /** @class */ (function () {
    function UnleashRateEntryModel() {
        this.gradeValue = null;
        this.needCount = null;
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
    UnleashRateEntryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRateEntryModel()
            .withGradeValue(data["gradeValue"])
            .withNeedCount(data["needCount"]);
    };
    UnleashRateEntryModel.prototype.toDict = function () {
        return {
            "gradeValue": this.getGradeValue(),
            "needCount": this.getNeedCount(),
        };
    };
    return UnleashRateEntryModel;
}());
exports.default = UnleashRateEntryModel;
//# sourceMappingURL=UnleashRateEntryModel.js.map