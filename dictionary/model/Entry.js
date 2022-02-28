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
var grnFormat = "grn:gs2:{region}:{ownerId}:dictionary:{namespaceName}:user:{userId}:entry:{entryModelName}";
var Entry = /** @class */ (function () {
    function Entry() {
        this.entryId = null;
        this.userId = null;
        this.name = null;
        this.acquiredAt = null;
    }
    Entry.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Entry.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Entry.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Entry.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{entryModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Entry.getEntryModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{entryModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Entry.isValid = function (grn) {
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
        if (this.getEntryModelName(grn) == null) {
            return false;
        }
        return true;
    };
    Entry.createGrn = function (region, ownerId, namespaceName, userId, entryModelName) {
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
        if (entryModelName == null || entryModelName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{entryModelName}', entryModelName);
    };
    Entry.prototype.getEntryId = function () {
        return this.entryId;
    };
    Entry.prototype.setEntryId = function (entryId) {
        this.entryId = entryId;
        return this;
    };
    Entry.prototype.withEntryId = function (entryId) {
        this.entryId = entryId;
        return this;
    };
    Entry.prototype.getUserId = function () {
        return this.userId;
    };
    Entry.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Entry.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Entry.prototype.getName = function () {
        return this.name;
    };
    Entry.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Entry.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Entry.prototype.getAcquiredAt = function () {
        return this.acquiredAt;
    };
    Entry.prototype.setAcquiredAt = function (acquiredAt) {
        this.acquiredAt = acquiredAt;
        return this;
    };
    Entry.prototype.withAcquiredAt = function (acquiredAt) {
        this.acquiredAt = acquiredAt;
        return this;
    };
    Entry.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Entry()
            .withEntryId(data["entryId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withAcquiredAt(data["acquiredAt"]);
    };
    Entry.prototype.toDict = function () {
        return {
            "entryId": this.getEntryId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "acquiredAt": this.getAcquiredAt(),
        };
    };
    return Entry;
}());
exports.default = Entry;
//# sourceMappingURL=Entry.js.map