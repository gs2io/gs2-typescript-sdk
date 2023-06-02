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
var FormationMoldStatistics = /** @class */ (function () {
    function FormationMoldStatistics() {
        this.increaseCapacity = null;
        this.increaseCapacityAmount = null;
    }
    FormationMoldStatistics.prototype.getIncreaseCapacity = function () {
        return this.increaseCapacity;
    };
    FormationMoldStatistics.prototype.setIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    FormationMoldStatistics.prototype.withIncreaseCapacity = function (increaseCapacity) {
        this.increaseCapacity = increaseCapacity;
        return this;
    };
    FormationMoldStatistics.prototype.getIncreaseCapacityAmount = function () {
        return this.increaseCapacityAmount;
    };
    FormationMoldStatistics.prototype.setIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    FormationMoldStatistics.prototype.withIncreaseCapacityAmount = function (increaseCapacityAmount) {
        this.increaseCapacityAmount = increaseCapacityAmount;
        return this;
    };
    FormationMoldStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldStatistics()
            .withIncreaseCapacity(data["increaseCapacity"])
            .withIncreaseCapacityAmount(data["increaseCapacityAmount"]);
    };
    FormationMoldStatistics.prototype.toDict = function () {
        return {
            "increaseCapacity": this.getIncreaseCapacity(),
            "increaseCapacityAmount": this.getIncreaseCapacityAmount(),
        };
    };
    return FormationMoldStatistics;
}());
exports.default = FormationMoldStatistics;
//# sourceMappingURL=FormationMoldStatistics.js.map