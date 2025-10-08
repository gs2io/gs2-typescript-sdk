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
var grnFormat = "grn:gs2:{region}:{ownerId}:datastore:{namespaceName}:user:{userId}:data:{dataObjectName}";
var DataObject = /** @class */ (function () {
    function DataObject() {
        this.dataObjectId = null;
        this.name = null;
        this.userId = null;
        this.scope = null;
        this.allowUserIds = null;
        this.status = null;
        this.generation = null;
        this.previousGeneration = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    DataObject.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObject.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObject.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObject.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{dataObjectName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObject.getDataObjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObject.isValid = function (grn) {
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
        if (this.getDataObjectName(grn) == null || this.getDataObjectName(grn) === '') {
            return false;
        }
        return true;
    };
    DataObject.createGrn = function (region, ownerId, namespaceName, userId, dataObjectName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{dataObjectName}', dataObjectName !== null && dataObjectName !== void 0 ? dataObjectName : '');
    };
    DataObject.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    DataObject.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    DataObject.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    DataObject.prototype.getName = function () {
        return this.name;
    };
    DataObject.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    DataObject.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    DataObject.prototype.getUserId = function () {
        return this.userId;
    };
    DataObject.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DataObject.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DataObject.prototype.getScope = function () {
        return this.scope;
    };
    DataObject.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    DataObject.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    DataObject.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    DataObject.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    DataObject.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    DataObject.prototype.getStatus = function () {
        return this.status;
    };
    DataObject.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    DataObject.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    DataObject.prototype.getGeneration = function () {
        return this.generation;
    };
    DataObject.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObject.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObject.prototype.getPreviousGeneration = function () {
        return this.previousGeneration;
    };
    DataObject.prototype.setPreviousGeneration = function (previousGeneration) {
        this.previousGeneration = previousGeneration;
        return this;
    };
    DataObject.prototype.withPreviousGeneration = function (previousGeneration) {
        this.previousGeneration = previousGeneration;
        return this;
    };
    DataObject.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DataObject.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObject.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObject.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    DataObject.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DataObject.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DataObject.prototype.getRevision = function () {
        return this.revision;
    };
    DataObject.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DataObject.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DataObject.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObject()
            .withDataObjectId(data["dataObjectId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : null)
            .withStatus(data["status"])
            .withGeneration(data["generation"])
            .withPreviousGeneration(data["previousGeneration"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    DataObject.prototype.toDict = function () {
        return {
            "dataObjectId": this.getDataObjectId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : null,
            "status": this.getStatus(),
            "generation": this.getGeneration(),
            "previousGeneration": this.getPreviousGeneration(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return DataObject;
}());
exports.default = DataObject;
//# sourceMappingURL=DataObject.js.map