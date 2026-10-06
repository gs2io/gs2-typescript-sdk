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
var Gs2Enhance = tslib_1.__importStar(require("../../enhance/model"));
var UnleashRecipe = /** @class */ (function () {
    function UnleashRecipe() {
        this.name = null;
        this.metadata = null;
        this.targetGroupKeys = null;
        this.materials = null;
    }
    UnleashRecipe.prototype.getName = function () {
        return this.name;
    };
    UnleashRecipe.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRecipe.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRecipe.prototype.getMetadata = function () {
        return this.metadata;
    };
    UnleashRecipe.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRecipe.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRecipe.prototype.getTargetGroupKeys = function () {
        return this.targetGroupKeys;
    };
    UnleashRecipe.prototype.setTargetGroupKeys = function (targetGroupKeys) {
        this.targetGroupKeys = targetGroupKeys;
        return this;
    };
    UnleashRecipe.prototype.withTargetGroupKeys = function (targetGroupKeys) {
        this.targetGroupKeys = targetGroupKeys;
        return this;
    };
    UnleashRecipe.prototype.getMaterials = function () {
        return this.materials;
    };
    UnleashRecipe.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashRecipe.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    UnleashRecipe.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRecipe()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTargetGroupKeys(data.targetGroupKeys ?
            data.targetGroupKeys.map(function (item) {
                return item;
            }) : null)
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.UnleashMaterial.fromDict(item);
            }) : null);
    };
    UnleashRecipe.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "targetGroupKeys": this.getTargetGroupKeys() ?
                this.getTargetGroupKeys().map(function (item) {
                    return item;
                }) : null,
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return UnleashRecipe;
}());
exports.default = UnleashRecipe;
//# sourceMappingURL=UnleashRecipe.js.map