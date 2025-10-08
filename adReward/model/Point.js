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
var grnFormat = "grn:gs2:{region}:{ownerId}:adReward:{namespaceName}:user:{userId}:point";
var Point = /** @class */ (function () {
    function Point() {
        this.pointId = null;
        this.userId = null;
        this.point = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Point.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Point.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Point.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Point.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Point.isValid = function (grn) {
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
        return true;
    };
    Point.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    Point.prototype.getPointId = function () {
        return this.pointId;
    };
    Point.prototype.setPointId = function (pointId) {
        this.pointId = pointId;
        return this;
    };
    Point.prototype.withPointId = function (pointId) {
        this.pointId = pointId;
        return this;
    };
    Point.prototype.getUserId = function () {
        return this.userId;
    };
    Point.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Point.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Point.prototype.getPoint = function () {
        return this.point;
    };
    Point.prototype.setPoint = function (point) {
        this.point = point;
        return this;
    };
    Point.prototype.withPoint = function (point) {
        this.point = point;
        return this;
    };
    Point.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Point.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Point.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Point.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Point.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Point.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Point.prototype.getRevision = function () {
        return this.revision;
    };
    Point.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Point.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Point.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Point()
            .withPointId(data["pointId"])
            .withUserId(data["userId"])
            .withPoint(data["point"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Point.prototype.toDict = function () {
        return {
            "pointId": this.getPointId(),
            "userId": this.getUserId(),
            "point": this.getPoint(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Point;
}());
exports.default = Point;
//# sourceMappingURL=Point.js.map