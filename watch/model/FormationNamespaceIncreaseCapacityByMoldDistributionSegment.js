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
var FormationNamespaceIncreaseCapacityByMoldDistributionSegment = /** @class */ (function () {
    function FormationNamespaceIncreaseCapacityByMoldDistributionSegment() {
        this.moldName = null;
        this.count = null;
    }
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.getMoldName = function () {
        return this.moldName;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceIncreaseCapacityByMoldDistributionSegment()
            .withMoldName(data["moldName"])
            .withCount(data["count"]);
    };
    FormationNamespaceIncreaseCapacityByMoldDistributionSegment.prototype.toDict = function () {
        return {
            "moldName": this.getMoldName(),
            "count": this.getCount(),
        };
    };
    return FormationNamespaceIncreaseCapacityByMoldDistributionSegment;
}());
exports.default = FormationNamespaceIncreaseCapacityByMoldDistributionSegment;
//# sourceMappingURL=FormationNamespaceIncreaseCapacityByMoldDistributionSegment.js.map