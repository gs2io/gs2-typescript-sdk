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
var grnFormat = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:master:area:{areaModelName}";
var AreaModelMaster = /** @class */ (function () {
    function AreaModelMaster() {
        this.areaModelMasterId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    AreaModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AreaModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AreaModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{areaModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AreaModelMaster.getAreaModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    AreaModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getAreaModelName(grn) == null || this.getAreaModelName(grn) === '') {
            return false;
        }
        return true;
    };
    AreaModelMaster.createGrn = function (region, ownerId, namespaceName, areaModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '');
    };
    AreaModelMaster.prototype.getAreaModelMasterId = function () {
        return this.areaModelMasterId;
    };
    AreaModelMaster.prototype.setAreaModelMasterId = function (areaModelMasterId) {
        this.areaModelMasterId = areaModelMasterId;
        return this;
    };
    AreaModelMaster.prototype.withAreaModelMasterId = function (areaModelMasterId) {
        this.areaModelMasterId = areaModelMasterId;
        return this;
    };
    AreaModelMaster.prototype.getName = function () {
        return this.name;
    };
    AreaModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    AreaModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    AreaModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    AreaModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    AreaModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    AreaModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    AreaModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    AreaModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    AreaModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    AreaModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AreaModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AreaModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    AreaModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AreaModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AreaModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    AreaModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AreaModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    AreaModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AreaModelMaster()
            .withAreaModelMasterId(data["areaModelMasterId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    AreaModelMaster.prototype.toDict = function () {
        return {
            "areaModelMasterId": this.getAreaModelMasterId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return AreaModelMaster;
}());
exports.default = AreaModelMaster;
//# sourceMappingURL=AreaModelMaster.js.map