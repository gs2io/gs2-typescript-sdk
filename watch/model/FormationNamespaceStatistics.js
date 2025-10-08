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
var FormationNamespaceStatistics = /** @class */ (function () {
    function FormationNamespaceStatistics() {
        this.update = null;
        this.increase = null;
    }
    FormationNamespaceStatistics.prototype.getUpdate = function () {
        return this.update;
    };
    FormationNamespaceStatistics.prototype.setUpdate = function (update) {
        this.update = update;
        return this;
    };
    FormationNamespaceStatistics.prototype.withUpdate = function (update) {
        this.update = update;
        return this;
    };
    FormationNamespaceStatistics.prototype.getIncrease = function () {
        return this.increase;
    };
    FormationNamespaceStatistics.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    FormationNamespaceStatistics.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    FormationNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceStatistics()
            .withUpdate(data["update"])
            .withIncrease(data["increase"]);
    };
    FormationNamespaceStatistics.prototype.toDict = function () {
        return {
            "update": this.getUpdate(),
            "increase": this.getIncrease(),
        };
    };
    return FormationNamespaceStatistics;
}());
exports.default = FormationNamespaceStatistics;
//# sourceMappingURL=FormationNamespaceStatistics.js.map