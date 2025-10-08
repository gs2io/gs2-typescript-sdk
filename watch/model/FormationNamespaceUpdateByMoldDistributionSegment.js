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
var FormationNamespaceUpdateByMoldDistributionSegment = /** @class */ (function () {
    function FormationNamespaceUpdateByMoldDistributionSegment() {
        this.moldModelName = null;
        this.count = null;
    }
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FormationNamespaceUpdateByMoldDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceUpdateByMoldDistributionSegment()
            .withMoldModelName(data["moldModelName"])
            .withCount(data["count"]);
    };
    FormationNamespaceUpdateByMoldDistributionSegment.prototype.toDict = function () {
        return {
            "moldModelName": this.getMoldModelName(),
            "count": this.getCount(),
        };
    };
    return FormationNamespaceUpdateByMoldDistributionSegment;
}());
exports.default = FormationNamespaceUpdateByMoldDistributionSegment;
//# sourceMappingURL=FormationNamespaceUpdateByMoldDistributionSegment.js.map