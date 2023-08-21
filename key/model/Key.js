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
var grnFormat = "grn:gs2:{region}:{ownerId}:key:{namespaceName}:key:{keyName}";
var Key = /** @class */ (function () {
    function Key() {
        this.keyId = null;
        this.name = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Key.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{keyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Key.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{keyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Key.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{keyName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Key.getKeyName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{keyName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Key.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getKeyName(grn) == null || this.getKeyName(grn) === '') {
            return false;
        }
        return true;
    };
    Key.createGrn = function (region, ownerId, namespaceName, keyName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{keyName}', keyName !== null && keyName !== void 0 ? keyName : '');
    };
    Key.prototype.getKeyId = function () {
        return this.keyId;
    };
    Key.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Key.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Key.prototype.getName = function () {
        return this.name;
    };
    Key.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Key.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Key.prototype.getDescription = function () {
        return this.description;
    };
    Key.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Key.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Key.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Key.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Key.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Key.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Key.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Key.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Key.prototype.getRevision = function () {
        return this.revision;
    };
    Key.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Key.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Key.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Key()
            .withKeyId(data["keyId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Key.prototype.toDict = function () {
        return {
            "keyId": this.getKeyId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Key;
}());
exports.default = Key;
//# sourceMappingURL=Key.js.map