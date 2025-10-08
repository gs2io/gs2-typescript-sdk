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
var LayerModel = /** @class */ (function () {
    function LayerModel() {
        this.layerModelId = null;
        this.name = null;
        this.metadata = null;
    }
    LayerModel.getRegion = function (grn) {
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
    LayerModel.getOwnerId = function (grn) {
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
    LayerModel.getNamespaceName = function (grn) {
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
    LayerModel.getAreaModelName = function (grn) {
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
    LayerModel.getLayerModelName = function (grn) {
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
    LayerModel.isValid = function (grn) {
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
    LayerModel.createGrn = function (region, ownerId, namespaceName, areaModelName, layerModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '')
            .replace('{layerModelName}', layerModelName !== null && layerModelName !== void 0 ? layerModelName : '');
    };
    LayerModel.prototype.getLayerModelId = function () {
        return this.layerModelId;
    };
    LayerModel.prototype.setLayerModelId = function (layerModelId) {
        this.layerModelId = layerModelId;
        return this;
    };
    LayerModel.prototype.withLayerModelId = function (layerModelId) {
        this.layerModelId = layerModelId;
        return this;
    };
    LayerModel.prototype.getName = function () {
        return this.name;
    };
    LayerModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LayerModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LayerModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    LayerModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LayerModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LayerModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LayerModel()
            .withLayerModelId(data["layerModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    };
    LayerModel.prototype.toDict = function () {
        return {
            "layerModelId": this.getLayerModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    };
    return LayerModel;
}());
exports.default = LayerModel;
//# sourceMappingURL=LayerModel.js.map