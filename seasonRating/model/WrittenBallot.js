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
var Gs2SeasonRating = tslib_1.__importStar(require("../../seasonRating/model"));
var WrittenBallot = /** @class */ (function () {
    function WrittenBallot() {
        this.ballot = null;
        this.gameResults = null;
    }
    WrittenBallot.prototype.getBallot = function () {
        return this.ballot;
    };
    WrittenBallot.prototype.setBallot = function (ballot) {
        this.ballot = ballot;
        return this;
    };
    WrittenBallot.prototype.withBallot = function (ballot) {
        this.ballot = ballot;
        return this;
    };
    WrittenBallot.prototype.getGameResults = function () {
        return this.gameResults;
    };
    WrittenBallot.prototype.setGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    WrittenBallot.prototype.withGameResults = function (gameResults) {
        this.gameResults = gameResults;
        return this;
    };
    WrittenBallot.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new WrittenBallot()
            .withBallot(Gs2SeasonRating.Ballot.fromDict(data["ballot"]))
            .withGameResults(data.gameResults ?
            data.gameResults.map(function (item) {
                return Gs2SeasonRating.GameResult.fromDict(item);
            }) : null);
    };
    WrittenBallot.prototype.toDict = function () {
        var _a;
        return {
            "ballot": (_a = this.getBallot()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "gameResults": this.getGameResults() ?
                this.getGameResults().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return WrittenBallot;
}());
exports.default = WrittenBallot;
//# sourceMappingURL=WrittenBallot.js.map