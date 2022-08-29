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
var grnFormat = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:layer:{areaModelName}:{layerModelName}";
var Layer = /** @class */ (function () {
    function Layer() {
        this.layerId = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.numberOfMinEntries = null;
        this.numberOfMaxEntries = null;
        this.createdAt = null;
    }
    Layer.getRegion = function (grn) {
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
    Layer.getOwnerId = function (grn) {
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
    Layer.getNamespaceName = function (grn) {
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
    Layer.getAreaModelName = function (grn) {
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
    Layer.getLayerModelName = function (grn) {
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
    Layer.isValid = function (grn) {
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
    Layer.createGrn = function (region, ownerId, namespaceName, areaModelName, layerModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '')
            .replace('{layerModelName}', layerModelName !== null && layerModelName !== void 0 ? layerModelName : '');
    };
    Layer.prototype.getLayerId = function () {
        return this.layerId;
    };
    Layer.prototype.setLayerId = function (layerId) {
        this.layerId = layerId;
        return this;
    };
    Layer.prototype.withLayerId = function (layerId) {
        this.layerId = layerId;
        return this;
    };
    Layer.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    Layer.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    Layer.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    Layer.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    Layer.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    Layer.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    Layer.prototype.getNumberOfMinEntries = function () {
        return this.numberOfMinEntries;
    };
    Layer.prototype.setNumberOfMinEntries = function (numberOfMinEntries) {
        this.numberOfMinEntries = numberOfMinEntries;
        return this;
    };
    Layer.prototype.withNumberOfMinEntries = function (numberOfMinEntries) {
        this.numberOfMinEntries = numberOfMinEntries;
        return this;
    };
    Layer.prototype.getNumberOfMaxEntries = function () {
        return this.numberOfMaxEntries;
    };
    Layer.prototype.setNumberOfMaxEntries = function (numberOfMaxEntries) {
        this.numberOfMaxEntries = numberOfMaxEntries;
        return this;
    };
    Layer.prototype.withNumberOfMaxEntries = function (numberOfMaxEntries) {
        this.numberOfMaxEntries = numberOfMaxEntries;
        return this;
    };
    Layer.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Layer.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Layer.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Layer.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Layer()
            .withLayerId(data["layerId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withNumberOfMinEntries(data["numberOfMinEntries"])
            .withNumberOfMaxEntries(data["numberOfMaxEntries"])
            .withCreatedAt(data["createdAt"]);
    };
    Layer.prototype.toDict = function () {
        return {
            "layerId": this.getLayerId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "numberOfMinEntries": this.getNumberOfMinEntries(),
            "numberOfMaxEntries": this.getNumberOfMaxEntries(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Layer;
}());
exports.default = Layer;
//# sourceMappingURL=Layer.js.map