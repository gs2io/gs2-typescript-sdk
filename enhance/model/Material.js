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
var Material = /** @class */ (function () {
    function Material() {
        this.materialItemSetId = null;
        this.count = null;
    }
    Material.prototype.getMaterialItemSetId = function () {
        return this.materialItemSetId;
    };
    Material.prototype.setMaterialItemSetId = function (materialItemSetId) {
        this.materialItemSetId = materialItemSetId;
        return this;
    };
    Material.prototype.withMaterialItemSetId = function (materialItemSetId) {
        this.materialItemSetId = materialItemSetId;
        return this;
    };
    Material.prototype.getCount = function () {
        return this.count;
    };
    Material.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    Material.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    Material.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Material()
            .withMaterialItemSetId(data["materialItemSetId"])
            .withCount(data["count"]);
    };
    Material.prototype.toDict = function () {
        return {
            "materialItemSetId": this.getMaterialItemSetId(),
            "count": this.getCount(),
        };
    };
    return Material;
}());
exports.default = Material;
//# sourceMappingURL=Material.js.map