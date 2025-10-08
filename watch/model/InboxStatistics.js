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
var InboxStatisticSummary_1 = tslib_1.__importDefault(require("./InboxStatisticSummary"));
var InboxStatisticOpenMinutes_1 = tslib_1.__importDefault(require("./InboxStatisticOpenMinutes"));
var InboxStatistics = /** @class */ (function () {
    function InboxStatistics() {
        this.summary = null;
        this.openMinutes = null;
    }
    InboxStatistics.prototype.getSummary = function () {
        return this.summary;
    };
    InboxStatistics.prototype.setSummary = function (summary) {
        this.summary = summary;
        return this;
    };
    InboxStatistics.prototype.withSummary = function (summary) {
        this.summary = summary;
        return this;
    };
    InboxStatistics.prototype.getOpenMinutes = function () {
        return this.openMinutes;
    };
    InboxStatistics.prototype.setOpenMinutes = function (openMinutes) {
        this.openMinutes = openMinutes;
        return this;
    };
    InboxStatistics.prototype.withOpenMinutes = function (openMinutes) {
        this.openMinutes = openMinutes;
        return this;
    };
    InboxStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxStatistics()
            .withSummary(InboxStatisticSummary_1.default.fromDict(data["summary"]))
            .withOpenMinutes(InboxStatisticOpenMinutes_1.default.fromDict(data["openMinutes"]));
    };
    InboxStatistics.prototype.toDict = function () {
        var _a, _b;
        return {
            "summary": (_a = this.getSummary()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "openMinutes": (_b = this.getOpenMinutes()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return InboxStatistics;
}());
exports.default = InboxStatistics;
//# sourceMappingURL=InboxStatistics.js.map