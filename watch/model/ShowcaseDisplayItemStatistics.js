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
var ShowcaseDisplayItemStatistics = /** @class */ (function () {
    function ShowcaseDisplayItemStatistics() {
        this.buy = null;
    }
    ShowcaseDisplayItemStatistics.prototype.getBuy = function () {
        return this.buy;
    };
    ShowcaseDisplayItemStatistics.prototype.setBuy = function (buy) {
        this.buy = buy;
        return this;
    };
    ShowcaseDisplayItemStatistics.prototype.withBuy = function (buy) {
        this.buy = buy;
        return this;
    };
    ShowcaseDisplayItemStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItemStatistics()
            .withBuy(data["buy"]);
    };
    ShowcaseDisplayItemStatistics.prototype.toDict = function () {
        return {
            "buy": this.getBuy(),
        };
    };
    return ShowcaseDisplayItemStatistics;
}());
exports.default = ShowcaseDisplayItemStatistics;
//# sourceMappingURL=ShowcaseDisplayItemStatistics.js.map