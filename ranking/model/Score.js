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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking:{namespaceName}:user:{userId}:score:{categoryName}:{scorerUserId}:{uniqueId}";
var Score = /** @class */ (function () {
    function Score() {
        this.scoreId = null;
        this.categoryName = null;
        this.userId = null;
        this.uniqueId = null;
        this.scorerUserId = null;
        this.score = null;
        this.metadata = null;
        this.createdAt = null;
    }
    Score.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getCategoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '(.*)')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getScorerUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '(.*)')
            .replace('{uniqueId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.getUniqueId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*')
            .replace('{scorerUserId}', '.*')
            .replace('{uniqueId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Score.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getCategoryName(grn) == null) {
            return false;
        }
        if (this.getScorerUserId(grn) == null) {
            return false;
        }
        if (this.getUniqueId(grn) == null) {
            return false;
        }
        return true;
    };
    Score.createGrn = function (region, ownerId, namespaceName, userId, categoryName, scorerUserId, uniqueId) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        if (categoryName == null || categoryName === '') {
            return null;
        }
        if (scorerUserId == null || scorerUserId === '') {
            return null;
        }
        if (uniqueId == null || uniqueId === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{categoryName}', categoryName)
            .replace('{scorerUserId}', scorerUserId)
            .replace('{uniqueId}', uniqueId);
    };
    Score.prototype.getScoreId = function () {
        return this.scoreId;
    };
    Score.prototype.setScoreId = function (scoreId) {
        this.scoreId = scoreId;
        return this;
    };
    Score.prototype.withScoreId = function (scoreId) {
        this.scoreId = scoreId;
        return this;
    };
    Score.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    Score.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Score.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Score.prototype.getUserId = function () {
        return this.userId;
    };
    Score.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Score.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Score.prototype.getUniqueId = function () {
        return this.uniqueId;
    };
    Score.prototype.setUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    Score.prototype.withUniqueId = function (uniqueId) {
        this.uniqueId = uniqueId;
        return this;
    };
    Score.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    Score.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    Score.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    Score.prototype.getScore = function () {
        return this.score;
    };
    Score.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    Score.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    Score.prototype.getMetadata = function () {
        return this.metadata;
    };
    Score.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Score.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Score.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Score.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Score.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Score.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Score()
            .withScoreId(data["scoreId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withUniqueId(data["uniqueId"])
            .withScorerUserId(data["scorerUserId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    };
    Score.prototype.toDict = function () {
        return {
            "scoreId": this.getScoreId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "uniqueId": this.getUniqueId(),
            "scorerUserId": this.getScorerUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Score;
}());
exports.default = Score;
//# sourceMappingURL=Score.js.map