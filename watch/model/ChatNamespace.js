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
var ChatNamespaceStatistics_1 = tslib_1.__importDefault(require("./ChatNamespaceStatistics"));
var ChatNamespaceDistributions_1 = tslib_1.__importDefault(require("./ChatNamespaceDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:chat:namespace:{namespaceName}";
var ChatNamespace = /** @class */ (function () {
    function ChatNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
    }
    ChatNamespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ChatNamespace.isValid = function (grn) {
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
        return true;
    };
    ChatNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    ChatNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    ChatNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ChatNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ChatNamespace.prototype.getYear = function () {
        return this.year;
    };
    ChatNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    ChatNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    ChatNamespace.prototype.getMonth = function () {
        return this.month;
    };
    ChatNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    ChatNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    ChatNamespace.prototype.getDay = function () {
        return this.day;
    };
    ChatNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    ChatNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    ChatNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ChatNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ChatNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ChatNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    ChatNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ChatNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ChatNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    ChatNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ChatNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ChatNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(ChatNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(ChatNamespaceDistributions_1.default.fromDict(data["distributions"]));
    };
    ChatNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ChatNamespace;
}());
exports.default = ChatNamespace;
//# sourceMappingURL=ChatNamespace.js.map