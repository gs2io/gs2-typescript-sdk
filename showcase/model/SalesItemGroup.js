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
var SalesItem_1 = tslib_1.__importDefault(require("./SalesItem"));
var SalesItemGroup = /** @class */ (function () {
    function SalesItemGroup() {
        this.name = null;
        this.metadata = null;
        this.salesItems = null;
    }
    SalesItemGroup.prototype.getName = function () {
        return this.name;
    };
    SalesItemGroup.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemGroup.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemGroup.prototype.getMetadata = function () {
        return this.metadata;
    };
    SalesItemGroup.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemGroup.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemGroup.prototype.getSalesItems = function () {
        return this.salesItems;
    };
    SalesItemGroup.prototype.setSalesItems = function (salesItems) {
        this.salesItems = salesItems;
        return this;
    };
    SalesItemGroup.prototype.withSalesItems = function (salesItems) {
        this.salesItems = salesItems;
        return this;
    };
    SalesItemGroup.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemGroup()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSalesItems(data.salesItems ?
            data.salesItems.map(function (item) {
                return SalesItem_1.default.fromDict(item);
            }) : []);
    };
    SalesItemGroup.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "salesItems": this.getSalesItems() ?
                this.getSalesItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return SalesItemGroup;
}());
exports.default = SalesItemGroup;
//# sourceMappingURL=SalesItemGroup.js.map