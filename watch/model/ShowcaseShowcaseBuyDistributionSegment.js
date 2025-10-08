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
var ShowcaseShowcaseBuyDistributionSegment = /** @class */ (function () {
    function ShowcaseShowcaseBuyDistributionSegment() {
        this.displayItemId = null;
        this.count = null;
    }
    ShowcaseShowcaseBuyDistributionSegment.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseShowcaseBuyDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcaseBuyDistributionSegment()
            .withDisplayItemId(data["displayItemId"])
            .withCount(data["count"]);
    };
    ShowcaseShowcaseBuyDistributionSegment.prototype.toDict = function () {
        return {
            "displayItemId": this.getDisplayItemId(),
            "count": this.getCount(),
        };
    };
    return ShowcaseShowcaseBuyDistributionSegment;
}());
exports.default = ShowcaseShowcaseBuyDistributionSegment;
//# sourceMappingURL=ShowcaseShowcaseBuyDistributionSegment.js.map