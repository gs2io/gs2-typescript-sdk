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
var grnFormat = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:model:area:{areaModelName}:layer:{layerModelName}";
var LayerModelMaster = /** @class */ (function () {
    function LayerModelMaster() {
        this.layerModelMasterId = null;
        this.areaModelName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    LayerModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LayerModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LayerModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LayerModelMaster.getAreaModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '(.*)')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LayerModelMaster.getLayerModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LayerModelMaster.isValid = function (grn) {
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
        if (this.getLayerModelName(grn) == null || this.getLayerModelName(grn) === '') {
            return false;
        }
        return true;
    };
    LayerModelMaster.createGrn = function (region, ownerId, namespaceName, areaModelName, layerModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '')
            .replace('{layerModelName}', layerModelName !== null && layerModelName !== void 0 ? layerModelName : '');
    };
    LayerModelMaster.prototype.getLayerModelMasterId = function () {
        return this.layerModelMasterId;
    };
    LayerModelMaster.prototype.setLayerModelMasterId = function (layerModelMasterId) {
        this.layerModelMasterId = layerModelMasterId;
        return this;
    };
    LayerModelMaster.prototype.withLayerModelMasterId = function (layerModelMasterId) {
        this.layerModelMasterId = layerModelMasterId;
        return this;
    };
    LayerModelMaster.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    LayerModelMaster.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    LayerModelMaster.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    LayerModelMaster.prototype.getName = function () {
        return this.name;
    };
    LayerModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LayerModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LayerModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    LayerModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    LayerModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    LayerModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    LayerModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LayerModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LayerModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    LayerModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LayerModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LayerModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    LayerModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LayerModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LayerModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LayerModelMaster()
            .withLayerModelMasterId(data["layerModelMasterId"])
            .withAreaModelName(data["areaModelName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    LayerModelMaster.prototype.toDict = function () {
        return {
            "layerModelMasterId": this.getLayerModelMasterId(),
            "areaModelName": this.getAreaModelName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return LayerModelMaster;
}());
exports.default = LayerModelMaster;
//# sourceMappingURL=LayerModelMaster.js.map