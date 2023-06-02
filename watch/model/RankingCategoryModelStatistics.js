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
var RankingCategoryModelStatistics = /** @class */ (function () {
    function RankingCategoryModelStatistics() {
        this.put = null;
    }
    RankingCategoryModelStatistics.prototype.getPut = function () {
        return this.put;
    };
    RankingCategoryModelStatistics.prototype.setPut = function (put) {
        this.put = put;
        return this;
    };
    RankingCategoryModelStatistics.prototype.withPut = function (put) {
        this.put = put;
        return this;
    };
    RankingCategoryModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModelStatistics()
            .withPut(data["put"]);
    };
    RankingCategoryModelStatistics.prototype.toDict = function () {
        return {
            "put": this.getPut(),
        };
    };
    return RankingCategoryModelStatistics;
}());
exports.default = RankingCategoryModelStatistics;
//# sourceMappingURL=RankingCategoryModelStatistics.js.map