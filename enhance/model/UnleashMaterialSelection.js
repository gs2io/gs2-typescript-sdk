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
var UnleashMaterialSelection = /** @class */ (function () {
    function UnleashMaterialSelection() {
        this.name = null;
        this.itemSetIds = null;
    }
    UnleashMaterialSelection.prototype.getName = function () {
        return this.name;
    };
    UnleashMaterialSelection.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UnleashMaterialSelection.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    UnleashMaterialSelection.prototype.getItemSetIds = function () {
        return this.itemSetIds;
    };
    UnleashMaterialSelection.prototype.setItemSetIds = function (itemSetIds) {
        this.itemSetIds = itemSetIds;
        return this;
    };
    UnleashMaterialSelection.prototype.withItemSetIds = function (itemSetIds) {
        this.itemSetIds = itemSetIds;
        return this;
    };
    UnleashMaterialSelection.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashMaterialSelection()
            .withName(data["name"])
            .withItemSetIds(data.itemSetIds ?
            data.itemSetIds.map(function (item) {
                return item;
            }) : null);
    };
    UnleashMaterialSelection.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "itemSetIds": this.getItemSetIds() ?
                this.getItemSetIds().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return UnleashMaterialSelection;
}());
exports.default = UnleashMaterialSelection;
//# sourceMappingURL=UnleashMaterialSelection.js.map