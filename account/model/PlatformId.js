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
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:platformId:{type}:{userIdentifier}";
var PlatformId = /** @class */ (function () {
    function PlatformId() {
        this.platformId = null;
        this.userId = null;
        this.type = null;
        this.userIdentifier = null;
        this.createdAt = null;
        this.revision = null;
    }
    PlatformId.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PlatformId.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PlatformId.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PlatformId.getType = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '(.*)')
            .replace('{userIdentifier}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PlatformId.getUserIdentifier = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
            .replace('{userIdentifier}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PlatformId.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getType(grn) == null || this.getType(grn) === '') {
            return false;
        }
        if (this.getUserIdentifier(grn) == null || this.getUserIdentifier(grn) === '') {
            return false;
        }
        return true;
    };
    PlatformId.createGrn = function (region, ownerId, namespaceName, type, userIdentifier) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{type}', type !== null && type !== void 0 ? type : '')
            .replace('{userIdentifier}', userIdentifier !== null && userIdentifier !== void 0 ? userIdentifier : '');
    };
    PlatformId.prototype.getPlatformId = function () {
        return this.platformId;
    };
    PlatformId.prototype.setPlatformId = function (platformId) {
        this.platformId = platformId;
        return this;
    };
    PlatformId.prototype.withPlatformId = function (platformId) {
        this.platformId = platformId;
        return this;
    };
    PlatformId.prototype.getUserId = function () {
        return this.userId;
    };
    PlatformId.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PlatformId.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PlatformId.prototype.getType = function () {
        return this.type;
    };
    PlatformId.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    PlatformId.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    PlatformId.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    PlatformId.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PlatformId.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    PlatformId.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    PlatformId.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PlatformId.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    PlatformId.prototype.getRevision = function () {
        return this.revision;
    };
    PlatformId.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PlatformId.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    PlatformId.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformId()
            .withPlatformId(data["platformId"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    PlatformId.prototype.toDict = function () {
        return {
            "platformId": this.getPlatformId(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return PlatformId;
}());
exports.default = PlatformId;
//# sourceMappingURL=PlatformId.js.map