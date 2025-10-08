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
        this.ratingName = null;
        this.gatheringName = null;
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
    Ballot.prototype.getRatingName = function () {
        return this.ratingName;
    };
    Ballot.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    Ballot.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    Ballot.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    Ballot.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    Ballot.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
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
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withNumberOfPlayer(data["numberOfPlayer"]);
    };
    Ballot.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "numberOfPlayer": this.getNumberOfPlayer(),
        };
    };
    return Ballot;
}());
exports.default = Ballot;
//# sourceMappingURL=Ballot.js.map