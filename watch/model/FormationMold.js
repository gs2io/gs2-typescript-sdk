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
var FormationMoldStatistics_1 = tslib_1.__importDefault(require("./FormationMoldStatistics"));
var FormationMoldDistributions_1 = tslib_1.__importDefault(require("./FormationMoldDistributions"));
var FormationForm_1 = tslib_1.__importDefault(require("./FormationForm"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:formation:namespace:{namespaceName}:mold:{moldModelName}";
var FormationMold = /** @class */ (function () {
    function FormationMold() {
        this.moldId = null;
        this.moldModelName = null;
        this.statistics = null;
        this.distributions = null;
        this.forms = null;
    }
    FormationMold.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.getMoldModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationMold.isValid = function (grn) {
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
        if (this.getMoldModelName(grn) == null || this.getMoldModelName(grn) === '') {
            return false;
        }
        return true;
    };
    FormationMold.createGrn = function (region, ownerId, year, month, day, namespaceName, moldModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{moldModelName}', moldModelName !== null && moldModelName !== void 0 ? moldModelName : '');
    };
    FormationMold.prototype.getMoldId = function () {
        return this.moldId;
    };
    FormationMold.prototype.setMoldId = function (moldId) {
        this.moldId = moldId;
        return this;
    };
    FormationMold.prototype.withMoldId = function (moldId) {
        this.moldId = moldId;
        return this;
    };
    FormationMold.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    FormationMold.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    FormationMold.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    FormationMold.prototype.getStatistics = function () {
        return this.statistics;
    };
    FormationMold.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationMold.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationMold.prototype.getDistributions = function () {
        return this.distributions;
    };
    FormationMold.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationMold.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationMold.prototype.getForms = function () {
        return this.forms;
    };
    FormationMold.prototype.setForms = function (forms) {
        this.forms = forms;
        return this;
    };
    FormationMold.prototype.withForms = function (forms) {
        this.forms = forms;
        return this;
    };
    FormationMold.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMold()
            .withMoldId(data["moldId"])
            .withMoldModelName(data["moldModelName"])
            .withStatistics(FormationMoldStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(FormationMoldDistributions_1.default.fromDict(data["distributions"]))
            .withForms(data.forms ?
            data.forms.map(function (item) {
                return FormationForm_1.default.fromDict(item);
            }) : []);
    };
    FormationMold.prototype.toDict = function () {
        var _a, _b;
        return {
            "moldId": this.getMoldId(),
            "moldModelName": this.getMoldModelName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "forms": this.getForms() ?
                this.getForms().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return FormationMold;
}());
exports.default = FormationMold;
//# sourceMappingURL=FormationMold.js.map