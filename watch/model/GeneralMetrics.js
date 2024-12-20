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
var GeneralMetrics = /** @class */ (function () {
    function GeneralMetrics() {
        this.dauWauMau = null;
        this.sessionDuration = null;
        this.firstEngagement = null;
        this.engagements = null;
        this.churnRates = null;
        this.useServices = null;
    }
    GeneralMetrics.prototype.getDauWauMau = function () {
        return this.dauWauMau;
    };
    GeneralMetrics.prototype.setDauWauMau = function (dauWauMau) {
        this.dauWauMau = dauWauMau;
        return this;
    };
    GeneralMetrics.prototype.withDauWauMau = function (dauWauMau) {
        this.dauWauMau = dauWauMau;
        return this;
    };
    GeneralMetrics.prototype.getSessionDuration = function () {
        return this.sessionDuration;
    };
    GeneralMetrics.prototype.setSessionDuration = function (sessionDuration) {
        this.sessionDuration = sessionDuration;
        return this;
    };
    GeneralMetrics.prototype.withSessionDuration = function (sessionDuration) {
        this.sessionDuration = sessionDuration;
        return this;
    };
    GeneralMetrics.prototype.getFirstEngagement = function () {
        return this.firstEngagement;
    };
    GeneralMetrics.prototype.setFirstEngagement = function (firstEngagement) {
        this.firstEngagement = firstEngagement;
        return this;
    };
    GeneralMetrics.prototype.withFirstEngagement = function (firstEngagement) {
        this.firstEngagement = firstEngagement;
        return this;
    };
    GeneralMetrics.prototype.getEngagements = function () {
        return this.engagements;
    };
    GeneralMetrics.prototype.setEngagements = function (engagements) {
        this.engagements = engagements;
        return this;
    };
    GeneralMetrics.prototype.withEngagements = function (engagements) {
        this.engagements = engagements;
        return this;
    };
    GeneralMetrics.prototype.getChurnRates = function () {
        return this.churnRates;
    };
    GeneralMetrics.prototype.setChurnRates = function (churnRates) {
        this.churnRates = churnRates;
        return this;
    };
    GeneralMetrics.prototype.withChurnRates = function (churnRates) {
        this.churnRates = churnRates;
        return this;
    };
    GeneralMetrics.prototype.getUseServices = function () {
        return this.useServices;
    };
    GeneralMetrics.prototype.setUseServices = function (useServices) {
        this.useServices = useServices;
        return this;
    };
    GeneralMetrics.prototype.withUseServices = function (useServices) {
        this.useServices = useServices;
        return this;
    };
    GeneralMetrics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralMetrics()
            .withDauWauMau(Gs2Watch.GeneralDauWauMau.fromDict(data["dauWauMau"]))
            .withSessionDuration(Gs2Watch.SessionDuration.fromDict(data["sessionDuration"]))
            .withFirstEngagement(Gs2Watch.FirstEngagement.fromDict(data["firstEngagement"]))
            .withEngagements(Gs2Watch.Engagements.fromDict(data["engagements"]))
            .withChurnRates(Gs2Watch.ChurnRateAggregate.fromDict(data["churnRates"]))
            .withUseServices(Gs2Watch.UseServices.fromDict(data["useServices"]));
    };
    GeneralMetrics.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "dauWauMau": (_a = this.getDauWauMau()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "sessionDuration": (_b = this.getSessionDuration()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "firstEngagement": (_c = this.getFirstEngagement()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "engagements": (_d = this.getEngagements()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "churnRates": (_e = this.getChurnRates()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "useServices": (_f = this.getUseServices()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return GeneralMetrics;
}());
exports.default = GeneralMetrics;
//# sourceMappingURL=GeneralMetrics.js.map