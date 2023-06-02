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
var FormationMoldUpdateByIndexDistributionSegment = /** @class */ (function () {
    function FormationMoldUpdateByIndexDistributionSegment() {
        this.index = null;
        this.count = null;
    }
    FormationMoldUpdateByIndexDistributionSegment.prototype.getIndex = function () {
        return this.index;
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationMoldUpdateByIndexDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldUpdateByIndexDistributionSegment()
            .withIndex(data["index"])
            .withCount(data["count"]);
    };
    FormationMoldUpdateByIndexDistributionSegment.prototype.toDict = function () {
        return {
            "index": this.getIndex(),
            "count": this.getCount(),
        };
    };
    return FormationMoldUpdateByIndexDistributionSegment;
}());
exports.default = FormationMoldUpdateByIndexDistributionSegment;
//# sourceMappingURL=FormationMoldUpdateByIndexDistributionSegment.js.map