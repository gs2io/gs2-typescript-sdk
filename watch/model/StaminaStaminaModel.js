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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:stamina:namespace:{namespaceName}:staminaModel:{staminaName}";
var StaminaStaminaModel = /** @class */ (function () {
    function StaminaStaminaModel() {
        this.staminaModelId = null;
        this.staminaName = null;
        this.statistics = null;
        this.distributions = null;
    }
    StaminaStaminaModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.getStaminaName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StaminaStaminaModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getStaminaName(grn) == null || this.getStaminaName(grn) === '') {
            return false;
        }
        return true;
    };
    StaminaStaminaModel.createGrn = function (region, ownerId, year, month, day, namespaceName, staminaName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{staminaName}', staminaName !== null && staminaName !== void 0 ? staminaName : '');
    };
    StaminaStaminaModel.prototype.getStaminaModelId = function () {
        return this.staminaModelId;
    };
    StaminaStaminaModel.prototype.setStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaStaminaModel.prototype.withStaminaModelId = function (staminaModelId) {
        this.staminaModelId = staminaModelId;
        return this;
    };
    StaminaStaminaModel.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    StaminaStaminaModel.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    StaminaStaminaModel.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    StaminaStaminaModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    StaminaStaminaModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    StaminaStaminaModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    StaminaStaminaModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    StaminaStaminaModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    StaminaStaminaModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    StaminaStaminaModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModel()
            .withStaminaModelId(data["staminaModelId"])
            .withStaminaName(data["staminaName"])
            .withStatistics(Gs2Watch.StaminaStaminaModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.StaminaStaminaModelDistributions.fromDict(data["distributions"]));
    };
    StaminaStaminaModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "staminaModelId": this.getStaminaModelId(),
            "staminaName": this.getStaminaName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return StaminaStaminaModel;
}());
exports.default = StaminaStaminaModel;
//# sourceMappingURL=StaminaStaminaModel.js.map