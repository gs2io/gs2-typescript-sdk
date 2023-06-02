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
var ShowcaseShowcaseStatistics = /** @class */ (function () {
    function ShowcaseShowcaseStatistics() {
        this.buy = null;
    }
    ShowcaseShowcaseStatistics.prototype.getBuy = function () {
        return this.buy;
    };
    ShowcaseShowcaseStatistics.prototype.setBuy = function (buy) {
        this.buy = buy;
        return this;
    };
    ShowcaseShowcaseStatistics.prototype.withBuy = function (buy) {
        this.buy = buy;
        return this;
    };
    ShowcaseShowcaseStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseStatistics()
            .withBuy(data["buy"]);
    };
    ShowcaseShowcaseStatistics.prototype.toDict = function () {
        return {
            "buy": this.getBuy(),
        };
    };
    return ShowcaseShowcaseStatistics;
}());
exports.default = ShowcaseShowcaseStatistics;
//# sourceMappingURL=ShowcaseShowcaseStatistics.js.map