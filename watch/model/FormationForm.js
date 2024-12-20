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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:formation:namespace:{namespaceName}:mold:{moldModelName}:form:{index}";
var FormationForm = /** @class */ (function () {
    function FormationForm() {
        this.formId = null;
        this.index = null;
        this.statistics = null;
        this.distributions = null;
    }
    FormationForm.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getMoldModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '(.*)')
            .replace('{index}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.getIndex = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FormationForm.isValid = function (grn) {
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
        if (this.getIndex(grn) == null || this.getIndex(grn) === '') {
            return false;
        }
        return true;
    };
    FormationForm.createGrn = function (region, ownerId, year, month, day, namespaceName, moldModelName, index) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{moldModelName}', moldModelName !== null && moldModelName !== void 0 ? moldModelName : '')
            .replace('{index}', index !== null && index !== void 0 ? index : '');
    };
    FormationForm.prototype.getFormId = function () {
        return this.formId;
    };
    FormationForm.prototype.setFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    FormationForm.prototype.withFormId = function (formId) {
        this.formId = formId;
        return this;
    };
    FormationForm.prototype.getIndex = function () {
        return this.index;
    };
    FormationForm.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    FormationForm.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    FormationForm.prototype.getStatistics = function () {
        return this.statistics;
    };
    FormationForm.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationForm.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationForm.prototype.getDistributions = function () {
        return this.distributions;
    };
    FormationForm.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationForm.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationForm.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationForm()
            .withFormId(data["formId"])
            .withIndex(data["index"])
            .withStatistics(Gs2Watch.FormationFormStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.FormationFormDistributions.fromDict(data["distributions"]));
    };
    FormationForm.prototype.toDict = function () {
        var _a, _b;
        return {
            "formId": this.getFormId(),
            "index": this.getIndex(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return FormationForm;
}());
exports.default = FormationForm;
//# sourceMappingURL=FormationForm.js.map