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
var Version_1 = tslib_1.__importDefault(require("./Version"));
var ScheduleVersion = /** @class */ (function () {
    function ScheduleVersion() {
        this.currentVersion = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scheduleEventId = null;
    }
    ScheduleVersion.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    ScheduleVersion.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    ScheduleVersion.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    ScheduleVersion.prototype.getWarningVersion = function () {
        return this.warningVersion;
    };
    ScheduleVersion.prototype.setWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    ScheduleVersion.prototype.withWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    ScheduleVersion.prototype.getErrorVersion = function () {
        return this.errorVersion;
    };
    ScheduleVersion.prototype.setErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    ScheduleVersion.prototype.withErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    ScheduleVersion.prototype.getScheduleEventId = function () {
        return this.scheduleEventId;
    };
    ScheduleVersion.prototype.setScheduleEventId = function (scheduleEventId) {
        this.scheduleEventId = scheduleEventId;
        return this;
    };
    ScheduleVersion.prototype.withScheduleEventId = function (scheduleEventId) {
        this.scheduleEventId = scheduleEventId;
        return this;
    };
    ScheduleVersion.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScheduleVersion()
            .withCurrentVersion(Version_1.default.fromDict(data["currentVersion"]))
            .withWarningVersion(Version_1.default.fromDict(data["warningVersion"]))
            .withErrorVersion(Version_1.default.fromDict(data["errorVersion"]))
            .withScheduleEventId(data["scheduleEventId"]);
    };
    ScheduleVersion.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "currentVersion": (_a = this.getCurrentVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "warningVersion": (_b = this.getWarningVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "errorVersion": (_c = this.getErrorVersion()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "scheduleEventId": this.getScheduleEventId(),
        };
    };
    return ScheduleVersion;
}());
exports.default = ScheduleVersion;
//# sourceMappingURL=ScheduleVersion.js.map