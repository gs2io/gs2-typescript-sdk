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
var MatchmakingNamespaceResultDistribution_1 = tslib_1.__importDefault(require("./MatchmakingNamespaceResultDistribution"));
var MatchmakingNamespaceWaitElapsedSecondsDistribution_1 = tslib_1.__importDefault(require("./MatchmakingNamespaceWaitElapsedSecondsDistribution"));
var MatchmakingNamespaceDistributions = /** @class */ (function () {
    function MatchmakingNamespaceDistributions() {
        this.result = null;
        this.waitElapsedSeconds = null;
    }
    MatchmakingNamespaceDistributions.prototype.getResult = function () {
        return this.result;
    };
    MatchmakingNamespaceDistributions.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    MatchmakingNamespaceDistributions.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    MatchmakingNamespaceDistributions.prototype.getWaitElapsedSeconds = function () {
        return this.waitElapsedSeconds;
    };
    MatchmakingNamespaceDistributions.prototype.setWaitElapsedSeconds = function (waitElapsedSeconds) {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    };
    MatchmakingNamespaceDistributions.prototype.withWaitElapsedSeconds = function (waitElapsedSeconds) {
        this.waitElapsedSeconds = waitElapsedSeconds;
        return this;
    };
    MatchmakingNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceDistributions()
            .withResult(MatchmakingNamespaceResultDistribution_1.default.fromDict(data["result"]))
            .withWaitElapsedSeconds(MatchmakingNamespaceWaitElapsedSecondsDistribution_1.default.fromDict(data["waitElapsedSeconds"]));
    };
    MatchmakingNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "result": (_a = this.getResult()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "waitElapsedSeconds": (_b = this.getWaitElapsedSeconds()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MatchmakingNamespaceDistributions;
}());
exports.default = MatchmakingNamespaceDistributions;
//# sourceMappingURL=MatchmakingNamespaceDistributions.js.map