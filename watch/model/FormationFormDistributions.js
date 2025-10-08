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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var FormationFormDistributions = /** @class */ (function () {
    function FormationFormDistributions() {
        this.slot = null;
        this.usage = null;
    }
    FormationFormDistributions.prototype.getSlot = function () {
        return this.slot;
    };
    FormationFormDistributions.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    FormationFormDistributions.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    FormationFormDistributions.prototype.getUsage = function () {
        return this.usage;
    };
    FormationFormDistributions.prototype.setUsage = function (usage) {
        this.usage = usage;
        return this;
    };
    FormationFormDistributions.prototype.withUsage = function (usage) {
        this.usage = usage;
        return this;
    };
    FormationFormDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationFormDistributions()
            .withSlot(Gs2Watch.FormationFormSlotDistribution.fromDict(data["slot"]))
            .withUsage(Gs2Watch.FormationFormUsageDistribution.fromDict(data["usage"]));
    };
    FormationFormDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "slot": (_a = this.getSlot()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "usage": (_b = this.getUsage()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return FormationFormDistributions;
}());
exports.default = FormationFormDistributions;
//# sourceMappingURL=FormationFormDistributions.js.map