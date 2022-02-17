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
var Ranking = /** @class */ (function () {
    function Ranking() {
        this.rank = null;
        this.index = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
    }
    Ranking.prototype.getRank = function () {
        return this.rank;
    };
    Ranking.prototype.setRank = function (rank) {
        this.rank = rank;
        return this;
    };
    Ranking.prototype.withRank = function (rank) {
        this.rank = rank;
        return this;
    };
    Ranking.prototype.getIndex = function () {
        return this.index;
    };
    Ranking.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    Ranking.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    Ranking.prototype.getUserId = function () {
        return this.userId;
    };
    Ranking.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Ranking.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Ranking.prototype.getScore = function () {
        return this.score;
    };
    Ranking.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    Ranking.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    Ranking.prototype.getMetadata = function () {
        return this.metadata;
    };
    Ranking.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Ranking.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Ranking.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Ranking.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Ranking.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Ranking.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Ranking()
            .withRank(data["rank"])
            .withIndex(data["index"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    };
    Ranking.prototype.toDict = function () {
        return {
            "rank": this.getRank(),
            "index": this.getIndex(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Ranking;
}());
export default Ranking;
//# sourceMappingURL=Ranking.js.map