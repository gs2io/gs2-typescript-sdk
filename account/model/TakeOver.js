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
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:takeOver:{type}:{userIdentifier}";
var TakeOver = /** @class */ (function () {
    function TakeOver() {
        this.takeOverId = null;
        this.userId = null;
        this.type = null;
        this.userIdentifier = null;
        this.password = null;
        this.createdAt = null;
        this.revision = null;
    }
    TakeOver.getRegion = function (grn) {
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
    TakeOver.getOwnerId = function (grn) {
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
    TakeOver.getNamespaceName = function (grn) {
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
    TakeOver.getType = function (grn) {
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
    TakeOver.getUserIdentifier = function (grn) {
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
    TakeOver.isValid = function (grn) {
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
    TakeOver.createGrn = function (region, ownerId, namespaceName, type, userIdentifier) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{type}', type !== null && type !== void 0 ? type : '')
            .replace('{userIdentifier}', userIdentifier !== null && userIdentifier !== void 0 ? userIdentifier : '');
    };
    TakeOver.prototype.getTakeOverId = function () {
        return this.takeOverId;
    };
    TakeOver.prototype.setTakeOverId = function (takeOverId) {
        this.takeOverId = takeOverId;
        return this;
    };
    TakeOver.prototype.withTakeOverId = function (takeOverId) {
        this.takeOverId = takeOverId;
        return this;
    };
    TakeOver.prototype.getUserId = function () {
        return this.userId;
    };
    TakeOver.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TakeOver.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TakeOver.prototype.getType = function () {
        return this.type;
    };
    TakeOver.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    TakeOver.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    TakeOver.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    TakeOver.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    TakeOver.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    TakeOver.prototype.getPassword = function () {
        return this.password;
    };
    TakeOver.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    TakeOver.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    TakeOver.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    TakeOver.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TakeOver.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    TakeOver.prototype.getRevision = function () {
        return this.revision;
    };
    TakeOver.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TakeOver.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    TakeOver.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TakeOver()
            .withTakeOverId(data["takeOverId"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    TakeOver.prototype.toDict = function () {
        return {
            "takeOverId": this.getTakeOverId(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return TakeOver;
}());
exports.default = TakeOver;
//# sourceMappingURL=TakeOver.js.map