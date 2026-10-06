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
var UnleashQuantityMaterialSetting = /** @class */ (function () {
    function UnleashQuantityMaterialSetting() {
        this.matchType = null;
        this.materialInventoryModelId = null;
        this.itemModelId = null;
        this.count = null;
    }
    UnleashQuantityMaterialSetting.prototype.getMatchType = function () {
        return this.matchType;
    };
    UnleashQuantityMaterialSetting.prototype.setMatchType = function (matchType) {
        this.matchType = matchType;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.withMatchType = function (matchType) {
        this.matchType = matchType;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.getMaterialInventoryModelId = function () {
        return this.materialInventoryModelId;
    };
    UnleashQuantityMaterialSetting.prototype.setMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.withMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.getItemModelId = function () {
        return this.itemModelId;
    };
    UnleashQuantityMaterialSetting.prototype.setItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.withItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.getCount = function () {
        return this.count;
    };
    UnleashQuantityMaterialSetting.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    UnleashQuantityMaterialSetting.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    UnleashQuantityMaterialSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashQuantityMaterialSetting()
            .withMatchType(data["matchType"])
            .withMaterialInventoryModelId(data["materialInventoryModelId"])
            .withItemModelId(data["itemModelId"])
            .withCount(data["count"]);
    };
    UnleashQuantityMaterialSetting.prototype.toDict = function () {
        return {
            "matchType": this.getMatchType(),
            "materialInventoryModelId": this.getMaterialInventoryModelId(),
            "itemModelId": this.getItemModelId(),
            "count": this.getCount(),
        };
    };
    return UnleashQuantityMaterialSetting;
}());
exports.default = UnleashQuantityMaterialSetting;
//# sourceMappingURL=UnleashQuantityMaterialSetting.js.map