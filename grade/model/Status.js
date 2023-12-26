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
var grnFormat = "grn:gs2:{region}:{ownerId}:grade:{namespaceName}:user:{userId}:gradeModel:{gradeName}:property:{propertyId}";
var Status = /** @class */ (function () {
    function Status() {
        this.statusId = null;
        this.gradeName = null;
        this.userId = null;
        this.propertyId = null;
        this.gradeValue = null;
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
            .replace('{gradeName}', '.*')
            .replace('{propertyId}', '.*'));
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
            .replace('{gradeName}', '.*')
            .replace('{propertyId}', '.*'));
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
            .replace('{gradeName}', '.*')
            .replace('{propertyId}', '.*'));
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
            .replace('{gradeName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getGradeName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{gradeName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{gradeName}', '.*')
            .replace('{propertyId}', '(.*)'));
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
        if (this.getGradeName(grn) == null || this.getGradeName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    Status.createGrn = function (region, ownerId, namespaceName, userId, gradeName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{gradeName}', gradeName !== null && gradeName !== void 0 ? gradeName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
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
    Status.prototype.getGradeName = function () {
        return this.gradeName;
    };
    Status.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    Status.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
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
    Status.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Status.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Status.prototype.getGradeValue = function () {
        return this.gradeValue;
    };
    Status.prototype.setGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
        return this;
    };
    Status.prototype.withGradeValue = function (gradeValue) {
        this.gradeValue = gradeValue;
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
            .withGradeName(data["gradeName"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withGradeValue(data["gradeValue"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Status.prototype.toDict = function () {
        return {
            "statusId": this.getStatusId(),
            "gradeName": this.getGradeName(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "gradeValue": this.getGradeValue(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Status;
}());
exports.default = Status;
//# sourceMappingURL=Status.js.map