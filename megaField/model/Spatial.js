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
var tslib_1 = require("tslib");
var Gs2MegaField = tslib_1.__importStar(require("../../megaField/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:user:{userId}:spatial:{areaModelName}:{layerModelName}";
var Spatial = /** @class */ (function () {
    function Spatial() {
        this.spatialId = null;
        this.userId = null;
        this.areaModelName = null;
        this.layerModelName = null;
        this.position = null;
        this.vector = null;
        this.r = null;
        this.lastSyncAt = null;
        this.createdAt = null;
    }
    Spatial.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.getAreaModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '(.*)')
            .replace('{layerModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.getLayerModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Spatial.isValid = function (grn) {
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
        if (this.getAreaModelName(grn) == null || this.getAreaModelName(grn) === '') {
            return false;
        }
        if (this.getLayerModelName(grn) == null || this.getLayerModelName(grn) === '') {
            return false;
        }
        return true;
    };
    Spatial.createGrn = function (region, ownerId, namespaceName, userId, areaModelName, layerModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '')
            .replace('{layerModelName}', layerModelName !== null && layerModelName !== void 0 ? layerModelName : '');
    };
    Spatial.prototype.getSpatialId = function () {
        return this.spatialId;
    };
    Spatial.prototype.setSpatialId = function (spatialId) {
        this.spatialId = spatialId;
        return this;
    };
    Spatial.prototype.withSpatialId = function (spatialId) {
        this.spatialId = spatialId;
        return this;
    };
    Spatial.prototype.getUserId = function () {
        return this.userId;
    };
    Spatial.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Spatial.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Spatial.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    Spatial.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    Spatial.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    Spatial.prototype.getLayerModelName = function () {
        return this.layerModelName;
    };
    Spatial.prototype.setLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    Spatial.prototype.withLayerModelName = function (layerModelName) {
        this.layerModelName = layerModelName;
        return this;
    };
    Spatial.prototype.getPosition = function () {
        return this.position;
    };
    Spatial.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    Spatial.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    Spatial.prototype.getVector = function () {
        return this.vector;
    };
    Spatial.prototype.setVector = function (vector) {
        this.vector = vector;
        return this;
    };
    Spatial.prototype.withVector = function (vector) {
        this.vector = vector;
        return this;
    };
    Spatial.prototype.getR = function () {
        return this.r;
    };
    Spatial.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    Spatial.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    Spatial.prototype.getLastSyncAt = function () {
        return this.lastSyncAt;
    };
    Spatial.prototype.setLastSyncAt = function (lastSyncAt) {
        this.lastSyncAt = lastSyncAt;
        return this;
    };
    Spatial.prototype.withLastSyncAt = function (lastSyncAt) {
        this.lastSyncAt = lastSyncAt;
        return this;
    };
    Spatial.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Spatial.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Spatial.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Spatial.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Spatial()
            .withSpatialId(data["spatialId"])
            .withUserId(data["userId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"])
            .withLastSyncAt(data["lastSyncAt"])
            .withCreatedAt(data["createdAt"]);
    };
    Spatial.prototype.toDict = function () {
        var _a, _b;
        return {
            "spatialId": this.getSpatialId(),
            "userId": this.getUserId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "vector": (_b = this.getVector()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "r": this.getR(),
            "lastSyncAt": this.getLastSyncAt(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Spatial;
}());
exports.default = Spatial;
//# sourceMappingURL=Spatial.js.map