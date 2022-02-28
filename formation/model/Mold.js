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
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:user:{userId}:mold:{moldName}";
var Mold = /** @class */ (function () {
    function Mold() {
        this.moldId = null;
        this.name = null;
        this.userId = null;
        this.capacity = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Mold.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Mold.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Mold.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Mold.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{moldName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Mold.getMoldName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Mold.isValid = function (grn) {
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
        if (this.getMoldName(grn) == null) {
            return false;
        }
        return true;
    };
    Mold.createGrn = function (region, ownerId, namespaceName, userId, moldName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{moldName}', moldName !== null && moldName !== void 0 ? moldName : '');
    };
    Mold.prototype.getMoldId = function () {
        return this.moldId;
    };
    Mold.prototype.setMoldId = function (moldId) {
        this.moldId = moldId;
        return this;
    };
    Mold.prototype.withMoldId = function (moldId) {
        this.moldId = moldId;
        return this;
    };
    Mold.prototype.getName = function () {
        return this.name;
    };
    Mold.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Mold.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Mold.prototype.getUserId = function () {
        return this.userId;
    };
    Mold.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Mold.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Mold.prototype.getCapacity = function () {
        return this.capacity;
    };
    Mold.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    Mold.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    Mold.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Mold.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Mold.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Mold.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Mold.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Mold.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Mold.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Mold()
            .withMoldId(data["moldId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCapacity(data["capacity"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Mold.prototype.toDict = function () {
        return {
            "moldId": this.getMoldId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "capacity": this.getCapacity(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Mold;
}());
exports.default = Mold;
//# sourceMappingURL=Mold.js.map