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
import Ballot from './Ballot';
import GameResult from './GameResult';
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
            .withBallot(Ballot.fromDict(data["ballot"]))
            .withGameResults(data.gameResults ?
            data.gameResults.map(function (item) {
                return GameResult.fromDict(item);
            }) : []);
    };
    WrittenBallot.prototype.toDict = function () {
        var _a;
        return {
            "ballot": (_a = this.getBallot()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "gameResults": this.getGameResults() ?
                this.getGameResults().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return WrittenBallot;
}());
export default WrittenBallot;
//# sourceMappingURL=WrittenBallot.js.map