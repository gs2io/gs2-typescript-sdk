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
var grnFormat = "grn:gs2::{ownerId}:identifier:user:{userName}";
var AttachSecurityPolicy = /** @class */ (function () {
    function AttachSecurityPolicy() {
        this.userId = null;
        this.securityPolicyIds = null;
        this.attachedAt = null;
        this.revision = null;
    }
    AttachSecurityPolicy.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '(.*)')
            .replace('{userName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AttachSecurityPolicy.getUserName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '.*')
            .replace('{userName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AttachSecurityPolicy.isValid = function (grn) {
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getUserName(grn) == null || this.getUserName(grn) === '') {
            return false;
        }
        return true;
    };
    AttachSecurityPolicy.createGrn = function (ownerId, userName) {
        return grnFormat
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{userName}', userName !== null && userName !== void 0 ? userName : '');
    };
    AttachSecurityPolicy.prototype.getUserId = function () {
        return this.userId;
    };
    AttachSecurityPolicy.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AttachSecurityPolicy.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AttachSecurityPolicy.prototype.getSecurityPolicyIds = function () {
        return this.securityPolicyIds;
    };
    AttachSecurityPolicy.prototype.setSecurityPolicyIds = function (securityPolicyIds) {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    };
    AttachSecurityPolicy.prototype.withSecurityPolicyIds = function (securityPolicyIds) {
        this.securityPolicyIds = securityPolicyIds;
        return this;
    };
    AttachSecurityPolicy.prototype.getAttachedAt = function () {
        return this.attachedAt;
    };
    AttachSecurityPolicy.prototype.setAttachedAt = function (attachedAt) {
        this.attachedAt = attachedAt;
        return this;
    };
    AttachSecurityPolicy.prototype.withAttachedAt = function (attachedAt) {
        this.attachedAt = attachedAt;
        return this;
    };
    AttachSecurityPolicy.prototype.getRevision = function () {
        return this.revision;
    };
    AttachSecurityPolicy.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AttachSecurityPolicy.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AttachSecurityPolicy.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AttachSecurityPolicy()
            .withUserId(data["userId"])
            .withSecurityPolicyIds(data.securityPolicyIds ?
            data.securityPolicyIds.map(function (item) {
                return item;
            }) : null)
            .withAttachedAt(data["attachedAt"])
            .withRevision(data["revision"]);
    };
    AttachSecurityPolicy.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "securityPolicyIds": this.getSecurityPolicyIds() ?
                this.getSecurityPolicyIds().map(function (item) {
                    return item;
                }) : null,
            "attachedAt": this.getAttachedAt(),
            "revision": this.getRevision(),
        };
    };
    return AttachSecurityPolicy;
}());
exports.default = AttachSecurityPolicy;
//# sourceMappingURL=AttachSecurityPolicy.js.map