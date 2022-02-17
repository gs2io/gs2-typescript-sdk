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
import WrittenBallot from './WrittenBallot';
var Vote = /** @class */ (function () {
    function Vote() {
        this.voteId = null;
        this.ratingName = null;
        this.gatheringName = null;
        this.writtenBallots = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Vote.prototype.getVoteId = function () {
        return this.voteId;
    };
    Vote.prototype.setVoteId = function (voteId) {
        this.voteId = voteId;
        return this;
    };
    Vote.prototype.withVoteId = function (voteId) {
        this.voteId = voteId;
        return this;
    };
    Vote.prototype.getRatingName = function () {
        return this.ratingName;
    };
    Vote.prototype.setRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    Vote.prototype.withRatingName = function (ratingName) {
        this.ratingName = ratingName;
        return this;
    };
    Vote.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    Vote.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    Vote.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    Vote.prototype.getWrittenBallots = function () {
        return this.writtenBallots;
    };
    Vote.prototype.setWrittenBallots = function (writtenBallots) {
        this.writtenBallots = writtenBallots;
        return this;
    };
    Vote.prototype.withWrittenBallots = function (writtenBallots) {
        this.writtenBallots = writtenBallots;
        return this;
    };
    Vote.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Vote.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Vote.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Vote.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Vote.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Vote.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Vote.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Vote()
            .withVoteId(data["voteId"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withWrittenBallots(data.writtenBallots ?
            data.writtenBallots.map(function (item) {
                return WrittenBallot.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Vote.prototype.toDict = function () {
        return {
            "voteId": this.getVoteId(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "writtenBallots": this.getWrittenBallots() ?
                this.getWrittenBallots().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Vote;
}());
export default Vote;
//# sourceMappingURL=Vote.js.map