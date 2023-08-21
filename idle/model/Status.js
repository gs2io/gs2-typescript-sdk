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
var grnFormat = "grn:gs2:{region}:{ownerId}:idle:{namespaceName}:user:{userId}:categoryModel:{categoryName}";
var Status = /** @class */ (function () {
    function Status() {
        this.statusId = null;
        this.categoryName = null;
        this.userId = null;
        this.randomSeed = null;
        this.idleMinutes = null;
        this.maximumIdleMinutes = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Status.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getCategoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{categoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.isValid = function (grn) {
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
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        return true;
    };
    Status.createGrn = function (region, ownerId, namespaceName, userId, categoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{categoryName}', categoryName !== null && categoryName !== void 0 ? categoryName : '');
    };
    Status.prototype.getStatusId = function () {
        return this.statusId;
    };
    Status.prototype.setStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.withStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    Status.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Status.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    Status.prototype.getUserId = function () {
        return this.userId;
    };
    Status.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.getRandomSeed = function () {
        return this.randomSeed;
    };
    Status.prototype.setRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    Status.prototype.withRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    Status.prototype.getIdleMinutes = function () {
        return this.idleMinutes;
    };
    Status.prototype.setIdleMinutes = function (idleMinutes) {
        this.idleMinutes = idleMinutes;
        return this;
    };
    Status.prototype.withIdleMinutes = function (idleMinutes) {
        this.idleMinutes = idleMinutes;
        return this;
    };
    Status.prototype.getMaximumIdleMinutes = function () {
        return this.maximumIdleMinutes;
    };
    Status.prototype.setMaximumIdleMinutes = function (maximumIdleMinutes) {
        this.maximumIdleMinutes = maximumIdleMinutes;
        return this;
    };
    Status.prototype.withMaximumIdleMinutes = function (maximumIdleMinutes) {
        this.maximumIdleMinutes = maximumIdleMinutes;
        return this;
    };
    Status.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Status.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Status.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.getRevision = function () {
        return this.revision;
    };
    Status.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Status.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Status.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withRandomSeed(data["randomSeed"])
            .withIdleMinutes(data["idleMinutes"])
            .withMaximumIdleMinutes(data["maximumIdleMinutes"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Status.prototype.toDict = function () {
        return {
            "statusId": this.getStatusId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "randomSeed": this.getRandomSeed(),
            "idleMinutes": this.getIdleMinutes(),
            "maximumIdleMinutes": this.getMaximumIdleMinutes(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Status;
}());
exports.default = Status;
//# sourceMappingURL=Status.js.map