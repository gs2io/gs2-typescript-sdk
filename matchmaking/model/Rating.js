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
var grnFormat = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:user:{userId}:rating:{ratingName}";
var Rating = /** @class */ (function () {
    function Rating() {
        this.ratingId = null;
        this.name = null;
        this.userId = null;
        this.rateValue = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Rating.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Rating.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Rating.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Rating.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{ratingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Rating.getRatingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{ratingName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Rating.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getRatingName(grn) == null || this.getRatingName(grn) === '') {
            return false;
        }
        return true;
    };
    Rating.createGrn = function (region, ownerId, namespaceName, userId, ratingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{ratingName}', ratingName !== null && ratingName !== void 0 ? ratingName : '');
    };
    Rating.prototype.getRatingId = function () {
        return this.ratingId;
    };
    Rating.prototype.setRatingId = function (ratingId) {
        this.ratingId = ratingId;
        return this;
    };
    Rating.prototype.withRatingId = function (ratingId) {
        this.ratingId = ratingId;
        return this;
    };
    Rating.prototype.getName = function () {
        return this.name;
    };
    Rating.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Rating.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Rating.prototype.getUserId = function () {
        return this.userId;
    };
    Rating.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Rating.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Rating.prototype.getRateValue = function () {
        return this.rateValue;
    };
    Rating.prototype.setRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    Rating.prototype.withRateValue = function (rateValue) {
        this.rateValue = rateValue;
        return this;
    };
    Rating.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Rating.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Rating.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Rating.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Rating.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Rating.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Rating.prototype.getRevision = function () {
        return this.revision;
    };
    Rating.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Rating.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Rating.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Rating()
            .withRatingId(data["ratingId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withRateValue(data["rateValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Rating.prototype.toDict = function () {
        return {
            "ratingId": this.getRatingId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "rateValue": this.getRateValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Rating;
}());
exports.default = Rating;
//# sourceMappingURL=Rating.js.map