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
var MatchmakingNamespaceStatistics = /** @class */ (function () {
    function MatchmakingNamespaceStatistics() {
        this.createGathering = null;
        this.matchmaking = null;
        this.completeRate = null;
    }
    MatchmakingNamespaceStatistics.prototype.getCreateGathering = function () {
        return this.createGathering;
    };
    MatchmakingNamespaceStatistics.prototype.setCreateGathering = function (createGathering) {
        this.createGathering = createGathering;
        return this;
    };
    MatchmakingNamespaceStatistics.prototype.withCreateGathering = function (createGathering) {
        this.createGathering = createGathering;
        return this;
    };
    MatchmakingNamespaceStatistics.prototype.getMatchmaking = function () {
        return this.matchmaking;
    };
    MatchmakingNamespaceStatistics.prototype.setMatchmaking = function (matchmaking) {
        this.matchmaking = matchmaking;
        return this;
    };
    MatchmakingNamespaceStatistics.prototype.withMatchmaking = function (matchmaking) {
        this.matchmaking = matchmaking;
        return this;
    };
    MatchmakingNamespaceStatistics.prototype.getCompleteRate = function () {
        return this.completeRate;
    };
    MatchmakingNamespaceStatistics.prototype.setCompleteRate = function (completeRate) {
        this.completeRate = completeRate;
        return this;
    };
    MatchmakingNamespaceStatistics.prototype.withCompleteRate = function (completeRate) {
        this.completeRate = completeRate;
        return this;
    };
    MatchmakingNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceStatistics()
            .withCreateGathering(data["createGathering"])
            .withMatchmaking(data["matchmaking"])
            .withCompleteRate(data["completeRate"]);
    };
    MatchmakingNamespaceStatistics.prototype.toDict = function () {
        return {
            "createGathering": this.getCreateGathering(),
            "matchmaking": this.getMatchmaking(),
            "completeRate": this.getCompleteRate(),
        };
    };
    return MatchmakingNamespaceStatistics;
}());
exports.default = MatchmakingNamespaceStatistics;
//# sourceMappingURL=MatchmakingNamespaceStatistics.js.map