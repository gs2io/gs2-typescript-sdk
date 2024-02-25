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
var Ballot = /** @class */ (function () {
    function Ballot() {
        this.userId = null;
        this.seasonName = null;
        this.sessionName = null;
        this.numberOfPlayer = null;
    }
    Ballot.prototype.getUserId = function () {
        return this.userId;
    };
    Ballot.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Ballot.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Ballot.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    Ballot.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    Ballot.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    Ballot.prototype.getSessionName = function () {
        return this.sessionName;
    };
    Ballot.prototype.setSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    Ballot.prototype.withSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    Ballot.prototype.getNumberOfPlayer = function () {
        return this.numberOfPlayer;
    };
    Ballot.prototype.setNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    Ballot.prototype.withNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    Ballot.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Ballot()
            .withUserId(data["userId"])
            .withSeasonName(data["seasonName"])
            .withSessionName(data["sessionName"])
            .withNumberOfPlayer(data["numberOfPlayer"]);
    };
    Ballot.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "seasonName": this.getSeasonName(),
            "sessionName": this.getSessionName(),
            "numberOfPlayer": this.getNumberOfPlayer(),
        };
    };
    return Ballot;
}());
exports.default = Ballot;
//# sourceMappingURL=Ballot.js.map