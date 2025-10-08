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
var ChurnRateAverage = /** @class */ (function () {
    function ChurnRateAverage() {
        this.churnRate = null;
    }
    ChurnRateAverage.prototype.getChurnRate = function () {
        return this.churnRate;
    };
    ChurnRateAverage.prototype.setChurnRate = function (churnRate) {
        this.churnRate = churnRate;
        return this;
    };
    ChurnRateAverage.prototype.withChurnRate = function (churnRate) {
        this.churnRate = churnRate;
        return this;
    };
    ChurnRateAverage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChurnRateAverage()
            .withChurnRate(data["churnRate"]);
    };
    ChurnRateAverage.prototype.toDict = function () {
        return {
            "churnRate": this.getChurnRate(),
        };
    };
    return ChurnRateAverage;
}());
exports.default = ChurnRateAverage;
//# sourceMappingURL=ChurnRateAverage.js.map