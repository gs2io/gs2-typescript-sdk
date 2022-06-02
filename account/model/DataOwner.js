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
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:account:{userId}:dataOwner:{dataOwnerName}";
var DataOwner = /** @class */ (function () {
    function DataOwner() {
        this.dataOwnerId = null;
        this.userId = null;
        this.name = null;
        this.createdAt = null;
    }
    DataOwner.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataOwnerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataOwner.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataOwnerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataOwner.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{dataOwnerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataOwner.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{dataOwnerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataOwner.getDataOwnerName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataOwnerName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataOwner.isValid = function (grn) {
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
        if (this.getDataOwnerName(grn) == null || this.getDataOwnerName(grn) === '') {
            return false;
        }
        return true;
    };
    DataOwner.createGrn = function (region, ownerId, namespaceName, userId, dataOwnerName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{dataOwnerName}', dataOwnerName !== null && dataOwnerName !== void 0 ? dataOwnerName : '');
    };
    DataOwner.prototype.getDataOwnerId = function () {
        return this.dataOwnerId;
    };
    DataOwner.prototype.setDataOwnerId = function (dataOwnerId) {
        this.dataOwnerId = dataOwnerId;
        return this;
    };
    DataOwner.prototype.withDataOwnerId = function (dataOwnerId) {
        this.dataOwnerId = dataOwnerId;
        return this;
    };
    DataOwner.prototype.getUserId = function () {
        return this.userId;
    };
    DataOwner.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DataOwner.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DataOwner.prototype.getName = function () {
        return this.name;
    };
    DataOwner.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    DataOwner.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    DataOwner.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DataOwner.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataOwner.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataOwner.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataOwner()
            .withDataOwnerId(data["dataOwnerId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withCreatedAt(data["createdAt"]);
    };
    DataOwner.prototype.toDict = function () {
        return {
            "dataOwnerId": this.getDataOwnerId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return DataOwner;
}());
exports.default = DataOwner;
//# sourceMappingURL=DataOwner.js.map