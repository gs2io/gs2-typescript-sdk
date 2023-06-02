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
var tslib_1 = require("tslib");
var FormationMoldCapacityDistribution_1 = tslib_1.__importDefault(require("./FormationMoldCapacityDistribution"));
var FormationMoldUpdateByIndexDistribution_1 = tslib_1.__importDefault(require("./FormationMoldUpdateByIndexDistribution"));
var FormationMoldDistributions = /** @class */ (function () {
    function FormationMoldDistributions() {
        this.capacity = null;
        this.updateByIndex = null;
    }
    FormationMoldDistributions.prototype.getCapacity = function () {
        return this.capacity;
    };
    FormationMoldDistributions.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    FormationMoldDistributions.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    FormationMoldDistributions.prototype.getUpdateByIndex = function () {
        return this.updateByIndex;
    };
    FormationMoldDistributions.prototype.setUpdateByIndex = function (updateByIndex) {
        this.updateByIndex = updateByIndex;
        return this;
    };
    FormationMoldDistributions.prototype.withUpdateByIndex = function (updateByIndex) {
        this.updateByIndex = updateByIndex;
        return this;
    };
    FormationMoldDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMoldDistributions()
            .withCapacity(FormationMoldCapacityDistribution_1.default.fromDict(data["capacity"]))
            .withUpdateByIndex(FormationMoldUpdateByIndexDistribution_1.default.fromDict(data["updateByIndex"]));
    };
    FormationMoldDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "capacity": (_a = this.getCapacity()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "updateByIndex": (_b = this.getUpdateByIndex()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return FormationMoldDistributions;
}());
exports.default = FormationMoldDistributions;
//# sourceMappingURL=FormationMoldDistributions.js.map