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
var ExperienceStatusDistributions_1 = tslib_1.__importDefault(require("./ExperienceStatusDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:experience:namespace:{namespaceName}:experienceModel:{experienceName}:status:{propertyId}";
var ExperienceStatus = /** @class */ (function () {
    function ExperienceStatus() {
        this.statusId = null;
        this.experienceName = null;
        this.propertyId = null;
        this.distributions = null;
    }
    ExperienceStatus.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getExperienceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*')
            .replace('{propertyId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceStatus.isValid = function (grn) {
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
        if (this.getExperienceName(grn) == null || this.getExperienceName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    ExperienceStatus.createGrn = function (region, ownerId, year, month, day, namespaceName, experienceName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{experienceName}', experienceName !== null && experienceName !== void 0 ? experienceName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
    };
    ExperienceStatus.prototype.getStatusId = function () {
        return this.statusId;
    };
    ExperienceStatus.prototype.setStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    ExperienceStatus.prototype.withStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    ExperienceStatus.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    ExperienceStatus.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceStatus.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceStatus.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    ExperienceStatus.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ExperienceStatus.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    ExperienceStatus.prototype.getDistributions = function () {
        return this.distributions;
    };
    ExperienceStatus.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceStatus.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatus()
            .withStatusId(data["statusId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withDistributions(ExperienceStatusDistributions_1.default.fromDict(data["distributions"]));
    };
    ExperienceStatus.prototype.toDict = function () {
        var _a;
        return {
            "statusId": this.getStatusId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "distributions": (_a = this.getDistributions()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return ExperienceStatus;
}());
exports.default = ExperienceStatus;
//# sourceMappingURL=ExperienceStatus.js.map