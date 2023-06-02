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
var FormationNamespaceUpdateByMoldDistribution_1 = tslib_1.__importDefault(require("./FormationNamespaceUpdateByMoldDistribution"));
var FormationNamespaceIncreaseCapacityByMoldDistribution_1 = tslib_1.__importDefault(require("./FormationNamespaceIncreaseCapacityByMoldDistribution"));
var FormationNamespaceDistributions = /** @class */ (function () {
    function FormationNamespaceDistributions() {
        this.updateByMold = null;
        this.increaseCapacityByMold = null;
    }
    FormationNamespaceDistributions.prototype.getUpdateByMold = function () {
        return this.updateByMold;
    };
    FormationNamespaceDistributions.prototype.setUpdateByMold = function (updateByMold) {
        this.updateByMold = updateByMold;
        return this;
    };
    FormationNamespaceDistributions.prototype.withUpdateByMold = function (updateByMold) {
        this.updateByMold = updateByMold;
        return this;
    };
    FormationNamespaceDistributions.prototype.getIncreaseCapacityByMold = function () {
        return this.increaseCapacityByMold;
    };
    FormationNamespaceDistributions.prototype.setIncreaseCapacityByMold = function (increaseCapacityByMold) {
        this.increaseCapacityByMold = increaseCapacityByMold;
        return this;
    };
    FormationNamespaceDistributions.prototype.withIncreaseCapacityByMold = function (increaseCapacityByMold) {
        this.increaseCapacityByMold = increaseCapacityByMold;
        return this;
    };
    FormationNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespaceDistributions()
            .withUpdateByMold(FormationNamespaceUpdateByMoldDistribution_1.default.fromDict(data["updateByMold"]))
            .withIncreaseCapacityByMold(FormationNamespaceIncreaseCapacityByMoldDistribution_1.default.fromDict(data["increaseCapacityByMold"]));
    };
    FormationNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "updateByMold": (_a = this.getUpdateByMold()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "increaseCapacityByMold": (_b = this.getIncreaseCapacityByMold()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return FormationNamespaceDistributions;
}());
exports.default = FormationNamespaceDistributions;
//# sourceMappingURL=FormationNamespaceDistributions.js.map