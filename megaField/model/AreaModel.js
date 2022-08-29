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
var grnFormat = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:model:area:{areaModelName}";
var AreaModel = /** @class */ (function () {
    function AreaModel() {
        this.areaModelId = null;
        this.name = null;
        this.metadata = null;
    }
    AreaModel.getRegion = function (grn) {
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
    AreaModel.getOwnerId = function (grn) {
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
    AreaModel.getNamespaceName = function (grn) {
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
    AreaModel.getAreaModelName = function (grn) {
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
    AreaModel.isValid = function (grn) {
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
    AreaModel.createGrn = function (region, ownerId, namespaceName, areaModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{areaModelName}', areaModelName !== null && areaModelName !== void 0 ? areaModelName : '');
    };
    AreaModel.prototype.getAreaModelId = function () {
        return this.areaModelId;
    };
    AreaModel.prototype.setAreaModelId = function (areaModelId) {
        this.areaModelId = areaModelId;
        return this;
    };
    AreaModel.prototype.withAreaModelId = function (areaModelId) {
        this.areaModelId = areaModelId;
        return this;
    };
    AreaModel.prototype.getName = function () {
        return this.name;
    };
    AreaModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    AreaModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    AreaModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    AreaModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    AreaModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    AreaModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AreaModel()
            .withAreaModelId(data["areaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    };
    AreaModel.prototype.toDict = function () {
        return {
            "areaModelId": this.getAreaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    };
    return AreaModel;
}());
exports.default = AreaModel;
//# sourceMappingURL=AreaModel.js.map