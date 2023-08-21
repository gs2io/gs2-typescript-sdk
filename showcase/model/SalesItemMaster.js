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
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:showcase:{namespaceName}:salesItem:{salesItemName}";
var SalesItemMaster = /** @class */ (function () {
    function SalesItemMaster() {
        this.salesItemId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.consumeActions = null;
        this.acquireActions = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SalesItemMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{salesItemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SalesItemMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{salesItemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SalesItemMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{salesItemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SalesItemMaster.getSalesItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{salesItemName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SalesItemMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getSalesItemName(grn) == null || this.getSalesItemName(grn) === '') {
            return false;
        }
        return true;
    };
    SalesItemMaster.createGrn = function (region, ownerId, namespaceName, salesItemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{salesItemName}', salesItemName !== null && salesItemName !== void 0 ? salesItemName : '');
    };
    SalesItemMaster.prototype.getSalesItemId = function () {
        return this.salesItemId;
    };
    SalesItemMaster.prototype.setSalesItemId = function (salesItemId) {
        this.salesItemId = salesItemId;
        return this;
    };
    SalesItemMaster.prototype.withSalesItemId = function (salesItemId) {
        this.salesItemId = salesItemId;
        return this;
    };
    SalesItemMaster.prototype.getName = function () {
        return this.name;
    };
    SalesItemMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SalesItemMaster.prototype.getDescription = function () {
        return this.description;
    };
    SalesItemMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SalesItemMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SalesItemMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SalesItemMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItemMaster.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    SalesItemMaster.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    SalesItemMaster.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    SalesItemMaster.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    SalesItemMaster.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    SalesItemMaster.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    SalesItemMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SalesItemMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SalesItemMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SalesItemMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SalesItemMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SalesItemMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SalesItemMaster.prototype.getRevision = function () {
        return this.revision;
    };
    SalesItemMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SalesItemMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SalesItemMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemMaster()
            .withSalesItemId(data["salesItemId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SalesItemMaster.prototype.toDict = function () {
        return {
            "salesItemId": this.getSalesItemId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SalesItemMaster;
}());
exports.default = SalesItemMaster;
//# sourceMappingURL=SalesItemMaster.js.map