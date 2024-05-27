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
var FixedTiming_1 = tslib_1.__importDefault(require("./FixedTiming"));
var Scope_1 = tslib_1.__importDefault(require("./Scope"));
var GlobalRankingSetting = /** @class */ (function () {
    function GlobalRankingSetting() {
        this.uniqueByUserId = null;
        this.calculateIntervalMinutes = null;
        this.calculateFixedTiming = null;
        this.additionalScopes = null;
        this.ignoreUserIds = null;
        this.generation = null;
    }
    GlobalRankingSetting.prototype.getUniqueByUserId = function () {
        return this.uniqueByUserId;
    };
    GlobalRankingSetting.prototype.setUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    GlobalRankingSetting.prototype.withUniqueByUserId = function (uniqueByUserId) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    };
    GlobalRankingSetting.prototype.getCalculateIntervalMinutes = function () {
        return this.calculateIntervalMinutes;
    };
    GlobalRankingSetting.prototype.setCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    GlobalRankingSetting.prototype.withCalculateIntervalMinutes = function (calculateIntervalMinutes) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    };
    GlobalRankingSetting.prototype.getCalculateFixedTiming = function () {
        return this.calculateFixedTiming;
    };
    GlobalRankingSetting.prototype.setCalculateFixedTiming = function (calculateFixedTiming) {
        this.calculateFixedTiming = calculateFixedTiming;
        return this;
    };
    GlobalRankingSetting.prototype.withCalculateFixedTiming = function (calculateFixedTiming) {
        this.calculateFixedTiming = calculateFixedTiming;
        return this;
    };
    GlobalRankingSetting.prototype.getAdditionalScopes = function () {
        return this.additionalScopes;
    };
    GlobalRankingSetting.prototype.setAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    GlobalRankingSetting.prototype.withAdditionalScopes = function (additionalScopes) {
        this.additionalScopes = additionalScopes;
        return this;
    };
    GlobalRankingSetting.prototype.getIgnoreUserIds = function () {
        return this.ignoreUserIds;
    };
    GlobalRankingSetting.prototype.setIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    GlobalRankingSetting.prototype.withIgnoreUserIds = function (ignoreUserIds) {
        this.ignoreUserIds = ignoreUserIds;
        return this;
    };
    GlobalRankingSetting.prototype.getGeneration = function () {
        return this.generation;
    };
    GlobalRankingSetting.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GlobalRankingSetting.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    GlobalRankingSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingSetting()
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withCalculateFixedTiming(FixedTiming_1.default.fromDict(data["calculateFixedTiming"]))
            .withAdditionalScopes(data.additionalScopes ?
            data.additionalScopes.map(function (item) {
                return Scope_1.default.fromDict(item);
            }) : [])
            .withIgnoreUserIds(data.ignoreUserIds ?
            data.ignoreUserIds.map(function (item) {
                return item;
            }) : [])
            .withGeneration(data["generation"]);
    };
    GlobalRankingSetting.prototype.toDict = function () {
        var _a;
        return {
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "calculateFixedTiming": (_a = this.getCalculateFixedTiming()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "additionalScopes": this.getAdditionalScopes() ?
                this.getAdditionalScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "ignoreUserIds": this.getIgnoreUserIds() ?
                this.getIgnoreUserIds().map(function (item) {
                    return item;
                }) : [],
            "generation": this.getGeneration(),
        };
    };
    return GlobalRankingSetting;
}());
exports.default = GlobalRankingSetting;
//# sourceMappingURL=GlobalRankingSetting.js.map