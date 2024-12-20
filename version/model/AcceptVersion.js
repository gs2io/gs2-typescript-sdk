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
var tslib_1 = require("tslib");
var Gs2Version = tslib_1.__importStar(require("../../version/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:version:{namespaceName}:user:{userId}:version:{versionName}:accept";
var AcceptVersion = /** @class */ (function () {
    function AcceptVersion() {
        this.acceptVersionId = null;
        this.versionName = null;
        this.userId = null;
        this.version = null;
        this.status = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    AcceptVersion.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AcceptVersion.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AcceptVersion.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AcceptVersion.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AcceptVersion.getVersionName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{versionName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AcceptVersion.isValid = function (grn) {
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
        if (this.getVersionName(grn) == null || this.getVersionName(grn) === '') {
            return false;
        }
        return true;
    };
    AcceptVersion.createGrn = function (region, ownerId, namespaceName, userId, versionName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{versionName}', versionName !== null && versionName !== void 0 ? versionName : '');
    };
    AcceptVersion.prototype.getAcceptVersionId = function () {
        return this.acceptVersionId;
    };
    AcceptVersion.prototype.setAcceptVersionId = function (acceptVersionId) {
        this.acceptVersionId = acceptVersionId;
        return this;
    };
    AcceptVersion.prototype.withAcceptVersionId = function (acceptVersionId) {
        this.acceptVersionId = acceptVersionId;
        return this;
    };
    AcceptVersion.prototype.getVersionName = function () {
        return this.versionName;
    };
    AcceptVersion.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptVersion.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptVersion.prototype.getUserId = function () {
        return this.userId;
    };
    AcceptVersion.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptVersion.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptVersion.prototype.getVersion = function () {
        return this.version;
    };
    AcceptVersion.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptVersion.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptVersion.prototype.getStatus = function () {
        return this.status;
    };
    AcceptVersion.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    AcceptVersion.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    AcceptVersion.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    AcceptVersion.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AcceptVersion.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AcceptVersion.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    AcceptVersion.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AcceptVersion.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AcceptVersion.prototype.getRevision = function () {
        return this.revision;
    };
    AcceptVersion.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AcceptVersion.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AcceptVersion.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcceptVersion()
            .withAcceptVersionId(data["acceptVersionId"])
            .withVersionName(data["versionName"])
            .withUserId(data["userId"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]))
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    AcceptVersion.prototype.toDict = function () {
        var _a;
        return {
            "acceptVersionId": this.getAcceptVersionId(),
            "versionName": this.getVersionName(),
            "userId": this.getUserId(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return AcceptVersion;
}());
exports.default = AcceptVersion;
//# sourceMappingURL=AcceptVersion.js.map