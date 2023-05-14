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
var MatchmakingStatistics_1 = tslib_1.__importDefault(require("./MatchmakingStatistics"));
var MatchmakingRole_1 = tslib_1.__importDefault(require("./MatchmakingRole"));
var MatchmakingNamespace = /** @class */ (function () {
    function MatchmakingNamespace() {
        this.namespaceName = null;
        this.statistics = null;
        this.role = null;
    }
    MatchmakingNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MatchmakingNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MatchmakingNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MatchmakingNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    MatchmakingNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MatchmakingNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MatchmakingNamespace.prototype.getRole = function () {
        return this.role;
    };
    MatchmakingNamespace.prototype.setRole = function (role) {
        this.role = role;
        return this;
    };
    MatchmakingNamespace.prototype.withRole = function (role) {
        this.role = role;
        return this;
    };
    MatchmakingNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespace()
            .withNamespaceName(data["namespaceName"])
            .withStatistics(MatchmakingStatistics_1.default.fromDict(data["statistics"]))
            .withRole(data.role ?
            data.role.map(function (item) {
                return MatchmakingRole_1.default.fromDict(item);
            }) : []);
    };
    MatchmakingNamespace.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "role": this.getRole() ?
                this.getRole().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return MatchmakingNamespace;
}());
exports.default = MatchmakingNamespace;
//# sourceMappingURL=MatchmakingNamespace.js.map