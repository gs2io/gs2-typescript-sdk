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
var UnleashMaterial = /** @class */ (function () {
    function UnleashMaterial() {
        this.name = null;
        this.materialType = null;
        this.individualSetting = null;
        this.quantitySetting = null;
    }
    UnleashMaterial.prototype.getName = function () {
        return this.name;
    };
    UnleashMaterial.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UnleashMaterial.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    UnleashMaterial.prototype.getMaterialType = function () {
        return this.materialType;
    };
    UnleashMaterial.prototype.setMaterialType = function (materialType) {
        this.materialType = materialType;
        return this;
    };
    UnleashMaterial.prototype.withMaterialType = function (materialType) {
        this.materialType = materialType;
        return this;
    };
    UnleashMaterial.prototype.getIndividualSetting = function () {
        return this.individualSetting;
    };
    UnleashMaterial.prototype.setIndividualSetting = function (individualSetting) {
        this.individualSetting = individualSetting;
        return this;
    };
    UnleashMaterial.prototype.withIndividualSetting = function (individualSetting) {
        this.individualSetting = individualSetting;
        return this;
    };
    UnleashMaterial.prototype.getQuantitySetting = function () {
        return this.quantitySetting;
    };
    UnleashMaterial.prototype.setQuantitySetting = function (quantitySetting) {
        this.quantitySetting = quantitySetting;
        return this;
    };
    UnleashMaterial.prototype.withQuantitySetting = function (quantitySetting) {
        this.quantitySetting = quantitySetting;
        return this;
    };
    UnleashMaterial.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashMaterial()
            .withName(data["name"])
            .withMaterialType(data["materialType"])
            .withIndividualSetting(Gs2Enhance.UnleashIndividualMaterialSetting.fromDict(data["individualSetting"]))
            .withQuantitySetting(Gs2Enhance.UnleashQuantityMaterialSetting.fromDict(data["quantitySetting"]));
    };
    UnleashMaterial.prototype.toDict = function () {
        var _a, _b;
        return {
            "name": this.getName(),
            "materialType": this.getMaterialType(),
            "individualSetting": (_a = this.getIndividualSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "quantitySetting": (_b = this.getQuantitySetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UnleashMaterial;
}());
exports.default = UnleashMaterial;
//# sourceMappingURL=UnleashMaterial.js.map