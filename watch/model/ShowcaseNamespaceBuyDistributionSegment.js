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
var ShowcaseNamespaceBuyDistributionSegment = /** @class */ (function () {
    function ShowcaseNamespaceBuyDistributionSegment() {
        this.showcaseName = null;
        this.count = null;
    }
    ShowcaseNamespaceBuyDistributionSegment.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ShowcaseNamespaceBuyDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespaceBuyDistributionSegment()
            .withShowcaseName(data["showcaseName"])
            .withCount(data["count"]);
    };
    ShowcaseNamespaceBuyDistributionSegment.prototype.toDict = function () {
        return {
            "showcaseName": this.getShowcaseName(),
            "count": this.getCount(),
        };
    };
    return ShowcaseNamespaceBuyDistributionSegment;
}());
exports.default = ShowcaseNamespaceBuyDistributionSegment;
//# sourceMappingURL=ShowcaseNamespaceBuyDistributionSegment.js.map