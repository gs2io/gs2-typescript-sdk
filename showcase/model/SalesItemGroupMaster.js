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
var SalesItemGroupMaster = /** @class */ (function () {
    function SalesItemGroupMaster() {
        this.salesItemGroupId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.salesItemNames = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    SalesItemGroupMaster.prototype.getSalesItemGroupId = function () {
        return this.salesItemGroupId;
    };
    SalesItemGroupMaster.prototype.setSalesItemGroupId = function (salesItemGroupId) {
        this.salesItemGroupId = salesItemGroupId;
        return this;
    };
    SalesItemGroupMaster.prototype.withSalesItemGroupId = function (salesItemGroupId) {
        this.salesItemGroupId = salesItemGroupId;
        return this;
    };
    SalesItemGroupMaster.prototype.getName = function () {
        return this.name;
    };
    SalesItemGroupMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemGroupMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemGroupMaster.prototype.getDescription = function () {
        return this.description;
    };
    SalesItemGroupMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SalesItemGroupMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SalesItemGroupMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SalesItemGroupMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemGroupMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemGroupMaster.prototype.getSalesItemNames = function () {
        return this.salesItemNames;
    };
    SalesItemGroupMaster.prototype.setSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    SalesItemGroupMaster.prototype.withSalesItemNames = function (salesItemNames) {
        this.salesItemNames = salesItemNames;
        return this;
    };
    SalesItemGroupMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SalesItemGroupMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SalesItemGroupMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SalesItemGroupMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SalesItemGroupMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SalesItemGroupMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SalesItemGroupMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemGroupMaster()
            .withSalesItemGroupId(data["salesItemGroupId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSalesItemNames(data.salesItemNames ?
            data.salesItemNames.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    SalesItemGroupMaster.prototype.toDict = function () {
        return {
            "salesItemGroupId": this.getSalesItemGroupId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "salesItemNames": this.getSalesItemNames() ?
                this.getSalesItemNames().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return SalesItemGroupMaster;
}());
exports.default = SalesItemGroupMaster;
//# sourceMappingURL=SalesItemGroupMaster.js.map